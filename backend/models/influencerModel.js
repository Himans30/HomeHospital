const mongoose = require('../connection');

const schema = new mongoose.Schema({
    fullname: String,
    category: String,
    details: Object,
    email: String,
    password: String,
    gender: String,
    age: Number,
    address: Object,
    created: Date,
    socialProfiles: [{ type: mongoose.Types.ObjectId, ref: 'SocialProfiles' }],
    avatar: String
})


const model = mongoose.model('Influencers', schema);

module.exports = model;
