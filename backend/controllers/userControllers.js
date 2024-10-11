import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

//generiami il JWT Token

const generateToken = (id, isAdmin) => {
  return jwt.sign({ id, isAdmin }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

//registarazione utente

export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body);
  try {
    const exitingUser = await User.findOne({ username });
    console.log(1);

    if (exitingUser) {
      console.log(exitingUser);
      return res.status(400).json({ message: "Email gia in uso" });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    console.log(2);

    //genera token jwt
    const token = generateToken(user._id, user.isAdmin);
    //restituiamio dati e token user

    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
      token,
    });
    console.log(3);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  console.log("Dati ricevuti per login:", req.body);

  if (!username || !password) {
    return res.status(400).json({ message: "Tutti i campi sono obbligatori." });
  }

  try {
    console.log("Verifica se l'utente esiste...");
    const user = await User.findOne({ username });
    console.log("Utente trovato:", user);

    if (!user) {
      return res.status(401).json({ message: "Credenziali non valide" });
    }

    console.log("Verifica della password...");
    console.log("password fornita",password);
    console.log("password nel db :" ,user.password);
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password corrispondente:", isMatch);

    if (user && isMatch) {
      // Genera token JWT
      const token = generateToken(user._id, user.isAdmin);

      // Restituisci dati e token utente
      res.status(200).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
        token,
      });
      console.log("Login completato.");
    } else {
      return res.status(401).json({ message: "Credenziali non valide" });
    }
  } catch (err) {
    console.error("Errore durante il login:", err);
    res
      .status(500)
      .json({ message: "Errore durante il login", error: err.message });
  }
};

// Ottieni tutti gli utenti (esempio, potrebbe essere protetto)
export const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (err) {
    res
      .status(500)
      .json({
        message: "Errore nel recupero degli utenti",
        error: err.message,
      });
  }
};
