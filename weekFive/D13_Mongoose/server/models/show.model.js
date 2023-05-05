const mongoose = require('mongoose');

const showSchema = new mongoose.Schema({
    name: {type: String},
    genre: {type: String},
    release_year: {type: Number}
}, {timestamps: true});
// timestamps give createdAt and updatedAt

const Show = mongoose.model('show', showSchema);

module.exports = Show;