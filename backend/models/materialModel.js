const mongoose = require('../connection');

const schema = new mongoose.Schema({
    files: Array,
    progress: Object,
})


const model = mongoose.model('CourseMaterial', schema);

module.exports = model;

