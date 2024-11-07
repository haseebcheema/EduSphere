import express from 'express'
import connectDatabase from './config/db.js';
import dotenv from 'dotenv';
import { User, Educator, Teacher, Student, School, Branch, StudentGroup  } from './models/index.js';

const app = express();
dotenv.config();

const PORT = process.env.APP_PORT;

connectDatabase();

app.listen(PORT, () => console.log("server is running"));