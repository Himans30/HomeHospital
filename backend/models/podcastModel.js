const mongoose = require('../connection');

const schema = new mongoose.Schema({
    title: String,
    description: String,
    artist: { type: mongoose.Types.ObjectId, ref: 'Users' },
    created: Date,
    uploaded: Date,
    data: Object
})


const model = mongoose.model('Podcasts', schema);

module.exports = model;
