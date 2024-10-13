import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs';
import { generateToken } from "./generateToken.js";
// Generazione del token JWT
// const generateToken = (id, isAdmin) => {
//   return jwt.sign({ id, isAdmin }, process.env.JWT_SECRET, { expiresIn: "30d" });
// };

// Registrazione utente
export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
      // Controlla se l'username esiste già
      const existingUser = await User.findOne({ username });
      if (existingUser) {
          return res.status(400).json({ message: 'Username già in uso' });
      }

      // Controlla se l'email esiste già
      const existingEmail = await User.findOne({ email });
      if (existingEmail) {
          return res.status(400).json({ message: 'Email già in uso' });
      }

      // Crea un nuovo utente
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({ username, email, password: hashedPassword });
      await user.save();

      // Genera un token JWT (se necessario)
      const token = generateToken(user._id);

      // Risposta con i dati dell'utente
      res.status(201).json({
          _id: user._id,
          username: user.username,
          token,
      });
  } catch (error) {
      console.error('Errore durante la registrazione:', error);
      res.status(500).json({ message: 'Errore interno del server' });
  }
};

// Login utente
export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  console.log('Richiesta di login ricevuta:', { username });

  try {
      const user = await User.findOne({ username });
      if (!user) {
          console.warn(`Utente non trovato: ${username}`);
          return res.status(401).json({ message: 'Credenziali non valide' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      console.log(`Password fornita: ${password}, Hash salvato: ${user.password}`); // Log per debugging
      if (!isMatch) {
          console.warn(`Password errata per l'utente: ${username}`);
          return res.status(401).json({ message: 'Credenziali non valide' });
      }

      const token = generateToken(user._id);
      console.log('Login riuscito per:', { username });


      res.json({ token });
  } catch (error) {
      console.error('Errore durante il login:', error);
      res.status(500).json({ message: 'Errore nel server' });
  }
};

// Ottenere tutti gli utenti (potrebbe essere protetto)
export const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Errore nel recupero degli utenti", error: err.message });
  }
};