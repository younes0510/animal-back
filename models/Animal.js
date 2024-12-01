const mongoose = require('mongoose');


module.exports = mongoose.model('Animal', {
    name: String,
    type: String,
    birthdate: Number,
    gender: String,
    image: String,
    description: String
});