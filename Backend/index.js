import express from 'express';
const connectToMongo = require('./db');
var cors = require('cors');
require("dotenv").config();

connectToMongo();

const app = express();

app.use(cors());
app.use(express.json());

app.listen(8800, () => {
    console.log('Backend server is running!');
});
