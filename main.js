const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const animalRoutes = require('./routes/animalRoutes')
const app = express();
app.use(express.json());
app.use(cors());


app.use(animalRoutes);


mongoose.connect('mongodb://127.0.0.1:27017/Animals')
    .then(() => app.listen(3000, () => console.log('Server started on: http://localhost:3000')))
    .catch(() => console.log('Count not connect to database'));
