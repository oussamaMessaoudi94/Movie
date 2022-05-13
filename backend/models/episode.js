const mongoose = require('mongoose');


const episodeSchema = mongoose.Schema({
    nameEpisode: String,
    dateAired : String,
    quality: String,
    score : String,
    video: String,
    idSerie: String,

    
});

const episode = mongoose.model ('episode', episodeSchema);

module.exports = episode;