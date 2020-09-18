const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const interestSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    icon: {
        type: String, //URL
    },
    color: {
        type: String,  //color code
    },
});


const Interest = mongoose.model('Interest', interestSchema);
module.exports = Interest;

//embedding document
// exports.interestSchema = interestSchema;