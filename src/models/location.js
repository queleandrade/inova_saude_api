const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
    name: String,
    latitude: Number,
    longitude: Number,
});

module.exports = mongoose.model('Location', LocationSchema);
