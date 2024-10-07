import User from "../models/User.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

//generiami il JWT Token

const generateToken = ( id,isAdmin) => {
    return jwt.sign({id,isAdmin},process.env.JWT_SECRET, {
expiresIn:'30d'
    });
};

//registarazione utente 

export const registerUser = async (req,res) => {
    const {username,email,password} = req.body;
    console.log(req.body)
    try{
        
        const exitingUser = await User.findOne({username});
        console.log(1);
        
        if(exitingUser){
            console.log(exitingUser);
            return res.status(400).json({message:'Email gia in uso'})
        }
        const hashedPassword = bcrypt.hashSync(password, 10);
        const user = new User({username,email,password:hashedPassword});
        await user.save();
console.log(2);

        //genera token jwt
        const token = generateToken(user._id,user.isAdmin)
        //restituiamio dati e token user

        res.status(201).json({
            _id:user._id,
            username:user.username,
            email:user.email,
            isAdmin:user.isAdmin,
            token,
        });
        console.log(3);
        
    }catch(err){
        res.status(500).json({message:err.message})
    }
}