import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
// database config
import mongo from './config/keys.mjs';
// rename file extensions to .mjs for experimental es6 modules in Node.js
// then run node --experimental-modules server.mjs
const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// Connect to mongo with mongoose
mongoose
  .connect(mongo.mongoURL)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
