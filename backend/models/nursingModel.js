const mongoose = require('../connection');

const schema = new mongoose.Schema({
    name: String,
    age:number,
    gender:String,
    types_of_illnetypes_of_illnees:String,
    address:String,
    mob_no:number,
    email_address:String,
    timing:number ,
    shift: number,
    medical_report:String,
    health_condtion:String,
    created: Date,
    data: Object,
    user: { type: mongoose.Types.ObjectId, ref: "Users" }
})


const model = mongoose.model('Nursing', schema);

module.exports = model;
