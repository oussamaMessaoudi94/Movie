const mongoose = require('mongoose');


const movieSchema = mongoose.Schema({
    nameFilm: String,
    dateAired : String,
    genre: String,
    score : String,
    duration: String,
    quality : String,
    description : String,
    img: String,
    vid : String
});

const movie = mongoose.model ('movie', movieSchema);

module.exports = movie;