import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authroutes from './routes/auth.routes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authroutes);

app.listen(process.env.PORT || 3000);