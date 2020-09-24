// const Contact = require('./contact.model.js');
const mongoose = require('mongoose');
const {contactSchema} = require('./contact.model.js')

const Schema = mongoose.Schema;

const holidaySchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    theme: {
        type: String,
        required: false,
        trim:true
    },
    date: {
        type: Date,
        required: true
    },

//reoccuring: weekly, monthly, yearly
reoccuring:{ 
    type: String
},

notes: {
    type: String,
    required: false
},
contacts: {
    type: [contactSchema]
}

});

//embedding reference
const Holiday = mongoose.model('Holiday', holidaySchema);
module.exports = Holiday;

//embedding document
module.exports.holidaySchema = holidaySchema;