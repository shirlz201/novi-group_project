const Contact = require('./contact.model.js');
const mongoose = require('mongoose');

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
reoccuring: {
    type: String
},

notes: {
    type: String,
    required: false
},
contacts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Contact'
}]

});

//embedding reference
const Holiday = mongoose.model('Holiday', holidaySchema);
module.exports = Holiday;

//embedding document
// exports.holidaySchema = holidaySchema;
