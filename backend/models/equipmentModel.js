const mongoose = require('../connection');

const schema = new mongoose.Schema({
    name: String,
    description: String,
    features: Object,
    price: Number,
    rentPrice: Number,
    rentable: Boolean,
    category: String,
    avatar: String
})


const model = mongoose.model('Equipments', schema);

module.exports = model;
