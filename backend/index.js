import express from 'express'
import connectDatabase from './config/db.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js'

const app = express();
dotenv.config();

const PORT = process.env.APP_PORT || 3000;

// middleware
app.use(express.json());
app.use(cookieParser());
app.use("/auth", authRoutes);

connectDatabase();

app.listen(PORT, () => console.log(`server is running on http://localhost:${PORT}`));