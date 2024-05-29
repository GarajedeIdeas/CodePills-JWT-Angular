const { model, Schema } = require('mongoose');

const songSchema = new Schema({
    title: String,
    artist: String,
    genre: String,
    album: String,
    duration: Number,
    year: Number,
    trackNumber: Number,
    isExplicit: Boolean
});

module.exports = model('song', songSchema);