import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log('Connected to DB'));
app.listen(process.env.PORT || 3000, () => console.log('Server Started'));

// handler를 인자로 받아서 오류처리 해주는 함수
function asyncHandler(handler) {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (e) {
      if (e.name === 'ValidationError') {
        res.status(400).send({ message: e.message });
      } else if (e.name === 'CastError') {
        res.status(404).send({ message: 'Cannot find given id.' });
      } else {
        res.status(500).send({ message: e.message });
      }
    }
  };
}

// get API
app.get('/hello', () => console.log('Hello!'));
