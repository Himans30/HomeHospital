const mongoose = require('../connection');

const schema = new mongoose.Schema({
    platform: String,
    details: Object,
    posts: Array,
})


const model = mongoose.model('SocialProfiles', schema);

module.exports = model;
