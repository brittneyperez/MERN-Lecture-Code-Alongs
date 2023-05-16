const mongoose = require('mongoose');

const TvShowSchema = new mongoose.Schema({
    title: {
        type: String
    },
    releaseYear: {
        type: Number
    },
    network: {
        type: String
    },
    creator: {
        type: String
    },
    genre: {
        type: String
    }
});

const Show = mongoose.model('Show', TvShowSchema);
module.exports = Show;