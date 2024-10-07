import mongoose from "mongoose";
    //shema per la mappa

    const mapSchema = new mongoose.Schema({
        name:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true,
        },
        imageUrl:{
            type:String,
        },
        downloadUrl:{
            type:String,
        },
        createdAt:{
            type:Date,
            default:Date.now,
        },
    });

    const Map = mongoose.model('Map',mapSchema);
    export default Map;