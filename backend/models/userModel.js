const mongoose = require('../connection');

const schema = new mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    age: Number,
    interests: Array,
    created: Date,
    isadmin: Boolean,
    enrolled: { type: mongoose.Types.ObjectId, ref: "Courses" },
    avatar: String
})


const model = mongoose.model('Users', schema);

module.exports = model;
