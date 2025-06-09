import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authroutes from './routes/auth.routes.js';
import blogPostRoutes from './routes/blogPost.routes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authroutes);
app.use('/api/blogPost', blogPostRoutes);

app.listen(process.env.PORT || 3000,() => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});