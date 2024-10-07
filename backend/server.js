import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from '../backend/config/db.js';
import userRoutes from '../backend/routes/userRoutes.js';
import mapRoutes from '../backend/routes/mapRoutes.js'

//carico le  variabili d'ambiente
dotenv.config();
//siamo qua 
console.log(cioa);

const app = express();
app.use(cors({
    origin:'http://localhost:3000'
}));
app.use(express.json());


//conessione db 
connectDB();

//rotte
app.use('/api/users',userRoutes)
app.use('/api/maps',mapRoutes)

//avviamo il server 

const PORT  =  process.env.PORT || 5000 ;
app.listen(PORT, () =>{
    console.log(`Server listening on port ${PORT}`);
    
})