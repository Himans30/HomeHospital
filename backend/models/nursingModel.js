const mongoose = require('../connection');

const schema = new mongoose.Schema({
    fullname: String,
    timing:String,
    shift:String,
    created: Date,
    data: Object,
    user: { type: mongoose.Types.ObjectId, ref: "Users" }
})


const model = mongoose.model('Nursing', schema);

module.exports = model;
