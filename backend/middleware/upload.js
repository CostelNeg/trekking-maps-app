import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

// Configurazione di Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configurazione dello storage su Cloudinary per Multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'maps', // Cartella dove salvare le mappe dell'applicazione
    allowed_formats: ['jpg', 'png', 'pdf'], // Formati di file supportati
    filename: (req, file) => {
      return `${Date.now()}-${file.originalname}`;
    },
    transformation: [{ width: 500, height: 500, crop: 'limit' }],
  },
});

// Configurazione di Multer per utilizzare lo storage su Cloudinary
const upload = multer({ storage: storage });

export default upload;