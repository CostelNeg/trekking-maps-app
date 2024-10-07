import express from 'express';
import User from '../models/User.js';
import jwt  from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { registerUser } from '../controllers/userControllers.js';
import { isAutenticated } from '../middleware/auth.js';

const router = express.Router()

//generriamo un token jwt
const generateToken = (userId) =>{
    return jwt.sign({id:userId}, process.env.JWT_SECRET, { expiresIn:'30d'});
};

//Registrazione newUSer

router.post('/register',registerUser,async(req, res) => {
    console.log('Dati ricevuti:', req.body); // Log dei dati in ingresso
    const {username,email, password} = req.body;

   
        //controllo if userExist

        const existingUSer = await User.findOne({username});
        console.log('qua1');
        if(existingUSer){
            return res.status(400).json({message:'Utente gia esistente'});
        }
        console.log('qua2');
        //creamo newUSer
        const hashedPassword = bcrypt.hashSync(password, 10);
        const user = new User({username,email, password:hashedPassword});
        console.log('qua3');
         try{
            await user.save();
            console.log('qua4');
            
        //res con ttoken 
        res.status(201).json({
            _id:user._id,
            username:user.username,
            token:generateToken(user.id)
        });
        console.log('qua5');
    }catch(err){
        console.log('quaerr');
        res.status(500).json({message: 'Errore durante la registrazione'});
    }
});

//login user

router.post('/login', async (req, res) => {
    const {username, password} = req.body;
    try {
        const user = await User.findOne({username});

        if(user && (await bcrypt.compare(password, user.password))) {
            res.json({
                _id:user._id,
                username:user.username,
                token:generateToken(user._id),
            });
        }else{
            res.status(401).json({message:'credenziali non valide'})
        }
    }catch(err){
        res.status(500).json({message:'Errore durante login'})
    }
});

export default router;