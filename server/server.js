import express from 'express';
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import Routes from './routes/ItemsRoutes.js'

const app = express();
dotenv.config();


const CONNECTION_URL = process.env.CONNECTION_STRING; // MongoDB connection string
const PORT = process.env.PORT || 4000;

mongoose.connect(CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    })
  })
  .catch((error) => {
    console.log(`${error} did not connect`)
  })


  // Middlewares (limiting the data uploaded)
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/items', Routes);
