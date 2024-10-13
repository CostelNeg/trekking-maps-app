import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// verifichiamo se utente e autenticato

export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401); // Se non c'è un token, restituisci 401

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403); // Se il token non è valido, restituisci 403
        req.user = user; // Salva le informazioni dell'utente nella richiesta
        next(); // Passa al prossimo middleware
    });
};

//middleware per controllo if user adminù

export const isAdmin = (req,res,next) => {
    if(req.user &&   req.user.role === 'admin'){
        //se e admin vai al prossimo middle
        next()
    }else{
        res.status(403).json({message: 'accesso negato, non sei un admin'})
    }
};