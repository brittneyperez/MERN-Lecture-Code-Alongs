const mongoose = require('mongoose');

const TvShowSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, "Title is required."],
        minlength: [2, "Title must be at least 2 characters."],
        maxLength: [50, "Title is too long."]
    },
    releaseYear: {
        type: Number,
        min: [1920, "No shows before year 1920 allowed."]
    },
    network: {
        type: String,
        require: [true, "Network is required."],
        minlength: [2, "The network must be at least 2 characters."],
        maxLength: [25, "The networks name exceeds character limit."]
    },
    creator: {
        type: String,
        require: [true, "Creator is required."],
        minlength: [2, "The creator must be at least 3 characters."],
        maxLength: [50, "The creator's name exceeds character limit."]
    },
    genre: {
        type: String,
        require: [true, "Genre is required."],
        minlength: [2, "Genre must be at least 2 characters."],
        maxLength: [25, "Genre is too long."]
    }
}, { timestamps: true });

const Show = mongoose.model('Show', TvShowSchema);
module.exports = Show;