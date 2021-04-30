const mongoose = require('../connection');

const schema = new mongoose.Schema({
    title: String,
    description: String,
    Details: Object,
    avatar: String,
    material: { type: mongoose.Types.ObjectId, ref: 'CourseMaterial' },
    reviews: [{ type: mongoose.Types.ObjectId, ref: 'Reviews' }]
})


const model = mongoose.model('Courses', schema);

module.exports = model;

