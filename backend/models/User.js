import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    username : {
        type:String,
        required:true,
        unique:true
    },
    email :{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    role: {
    type:String,
    default:'user'
    },
},{timestamps:true});

userSchema.pre('save',async function(next) {
    if(!this.isModified('password')) return next()

        //criptiamo la pass
        this.password = await bcrypt.hash(this.password,12)
        next();
});

//confronto della pass tra quella inserita e quella criptata
userSchema.methods.comparePassword = async function (candidatePassword) {
    return bcrypt.compare(candidatePassword,this.password)
};
 const User = mongoose.model('User', userSchema);
 export default User;