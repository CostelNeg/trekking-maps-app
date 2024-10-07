import {v2 as cloudinary} from 'cloudinary';
import multer from 'multer';
import {CloudinaryStorage} from 'multer-storage-cloudinary';

//configurazione cloudinary 

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
});

// CONFIGURAZIONE CLOUDINARY STORAGE PER MULTER 

const storage = new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder:'maps',//folder dove salveremo le mappe del applicazione
        allowed_formats:['jpg','png','pdf'],//file supportati
        filename:(req,file)=>{
            return `${Date.now()}-${file.originalname}`
        },
        transformation: [{ width: 500, height: 500, crop: 'limit' }],
    },
});

//configuriamo multer per usare cloud storage

const upload = multer ({storage:storage})

export default upload;