import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from '../backend/config/db.js';
import userRoutes from '../backend/routes/userRoutes.js';
import mapRoutes from '../backend/routes/mapRoutes.js';

dotenv.config();

console.log('Verifica JWT_SECRET:');
if (process.env.JWT_SECRET) {
  console.log('JWT_SECRET è impostato');
  console.log('Lunghezza JWT_SECRET:', process.env.JWT_SECRET.length);
  // Non stampare l'intero segreto per motivi di sicurezza
  console.log('Prime 4 caratteri del JWT_SECRET:', process.env.JWT_SECRET.substring(0, 4) + '...');
} else {
  console.log('ATTENZIONE: JWT_SECRET non è impostato!');
}

const app = express();

// Middleware
app.use(express.json());
// app.use(cors({ origin: 'http://localhost:3000' }));
app.use(cors())

// Connessione al database
connectDB();

// Rotte
app.use('/api/users', userRoutes);
 app.use('/api/maps', mapRoutes);

// Avvio del server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});