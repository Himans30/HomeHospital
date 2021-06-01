const mongoose = require('../connection');

const schema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    avatar: String,
    created: Date,
    data: Object,
    user: { type: mongoose.Types.ObjectId, ref: "Users" }
})


const model = mongoose.model('Service', schema);

module.exports = model;
