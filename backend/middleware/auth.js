import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// verifichiamo se utente e autenticato

export const isAutenticated = async (req,res,next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.starsWith('Bearer')){
        try{
            //estraiamo il token 
            token = req.headers.authorization.split(' ')[1];

            //verifichiamo il token jwt
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            //cerchiamo utente nel db senza pass

            req.user = await User.findById(decoded.id).select('-password')
            next()
        } catch(err){
            return res.status(401).json({message:'Token non valido!'})
        }
    }

    if(!token){
        return res.status(401).json({message:'Accesso negato, nessun token trovato'})
    }
}

//middleware per controllo if user adminù

export const isAdmin = (req,res,next) => {
    if(req.user &&   req.user.role === 'admin'){
        //se e admin vai al prossimo middle
        next()
    }else{
        res.status(403).json({message: 'accesso negato, non sei un admin'})
    }
};