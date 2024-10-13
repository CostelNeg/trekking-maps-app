import express from "express";
import User from "../models/User.js";
import bcrypt from 'bcryptjs'
import {
  loginUser,
  registerUser,
  getUsers,
} from "../controllers/userControllers.js";
import { generateToken } from "../controllers/generateToken.js";

const router = express.Router();

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

// Registrazione utente
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  console.log('Richiesta di registrazione ricevuta:', { username, email });

  try {
      // Controlla se l'utente esiste già
      const existingUser = await User.findOne({ username });
      if (existingUser) {
          console.warn(`Utente già esistente: ${username}`);
          return res.status(400).json({ message: 'Utente già esistente' });
      }

      // Hash della password
      const hashedPassword = await hashPassword(password);

      // Crea un nuovo utente
      const newUser = new User({
          username,
          email,
          password: hashedPassword, // Usa la password hashata
      });

      // Salva l'utente nel database
      await newUser.save();
      console.log('Utente registrato:', { username });

      // Genera il token JWT
      const token = generateToken(newUser._id, newUser.username);

      res.status(201).json({ token });
  } catch (error) {
      console.error('Errore durante la registrazione:', error);
      res.status(500).json({ message: 'Errore nel server' });
  }
});

// Login utente
router.post("/login", loginUser, async (req, res) => {
  const { username, password } = req.body;

    console.log('Richiesta di login ricevuta:', { username });

    try {
        const user = await User.findOne({ username });
        if (!user) {
            console.warn(`Utente non trovato: ${username}`);
            return res.status(401).json({ message: 'Credenziali non valide' });
        }

        // Verifica la password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.warn(`Password errata per l'utente: ${username}`);
            return res.status(401).json({ message: 'Credenziali non valide' });
        }

        // Genera il token JWT usando la funzione importata
        const token = generateToken(user._id, user.username);

        console.log('Login riuscito per:', { username });
        res.json({ token });
    } catch (error) {
        console.error('Errore durante il login:', error);
        res.status(500).json({ message: 'Errore nel server' });
    }

//   const { username, password } = req.body;

//   // Logging per il monitoraggio della richiesta
//   console.log('Richiesta di login ricevuta:', { username });

//   try {
//       // Controlla se l'utente esiste nel database
//       const user = await User.findOne({ username });
//       if (!user) {
//           console.warn(`Utente non trovato: ${username}`);
//           return res.status(401).json({ message: 'Credenziali non valide' });
//       }

//       // Verifica la password
//       const isMatch = await bcrypt.compare(password, user.password);
//       if (!isMatch) {
//           console.warn(`Password errata per l'utente: ${username}`);
//           return res.status(401).json({ message: 'Credenziali non valide' });
//       }

//       // Genera il token JWT
//       const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, {
//           expiresIn: '1h', // Durata del token
//       });
// console.log(process.env.JWT_SECRET)
//       console.log('Login riuscito per:', { username });
//       res.json({ token });
//   } catch (error) {
//       console.error('Errore durante il login:', error);
//       res.status(500).json({ message: 'Errore nel server' });
//   }
});

// router.post('/login', async (req, res) => {
//   const { username, password } = req.body;

//   // Logging per il monitoraggio della richiesta
//   console.log('Richiesta di login ricevuta:', { username });

//   try {
//       // Controlla se l'utente esiste nel database
//       const user = await User.findOne({ username });
//       if (!user) {
//           console.warn(`Utente non trovato: ${username}`);
//           return res.status(401).json({ message: 'Credenziali non valide' });
//       }

//       // Verifica la password
//       const isMatch = await bcrypt.compare(password, user.password);
//       if (!isMatch) {
//           console.warn(`Password errata per l'utente: ${username}`);
//           return res.status(401).json({ message: 'Credenziali non valide' });
//       }

//       // Genera il token JWT
//       const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, {
//           expiresIn: '1h', // Durata del token
//       });
// console.log(process.env.JWT_SECRET)
//       console.log('Login riuscito per:', { username });
//       res.json({ token });
//   } catch (error) {
//       console.error('Errore durante il login:', error);
//       res.status(500).json({ message: 'Errore nel server' });
//   }
// });
  


// Ottenere tutti gli utenti
router.get("/users", getUsers);

export default router;
