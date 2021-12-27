import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import router from './routes/index.js';
import checkApiKey from './middleware/checkApiKey.js';

dotenv.config();

const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL;

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  }),
);
app.use('/api', checkApiKey, router);

const start = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};
start();
