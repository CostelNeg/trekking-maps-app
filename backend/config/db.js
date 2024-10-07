import mongoose from "mongoose";

//func perla connesione al db

const connectDB = async() =>{
    try{
         await mongoose.connect(process.env.MONGO_URI, {
        
        });
        console.log(`connesione ok per : `);
    }catch(err){
        console.error(`Errore ${err.message}`);
        //in caso di errore fermiamo l'applicazione
        process.exit(1);
    }
}

export default connectDB;