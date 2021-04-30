const mongoose = require('../connection');

const schema = new mongoose.Schema({
    name: String,
    age: String,
    description: String,
    category: String,
    avatar: String,
    price: String,
    created: Date,
})


const model = mongoose.model('CrewMembers', schema);

module.exports = model;
