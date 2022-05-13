const mongoose = require('mongoose');


const serieSchema = mongoose.Schema({
    nameFilm: String,
    dateAired : String,
    genre: String,
    description : String,
    img: String,
});

const serie = mongoose.model ('serie', serieSchema);

module.exports = serie;