const mongoose = require('../connection');

const schema = new mongoose.Schema({
    title: String,
    description: String,
    artist: { type: mongoose.Types.ObjectId, ref: 'Users' },
    created: Date,
    podcasts: Array
})


const model = mongoose.model('Series', schema);

module.exports = model;

