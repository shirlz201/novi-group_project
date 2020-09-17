const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema({
//field names
firstName: {
    type: String,
    required: true,
    trim: true
},
lastName: {
    type: String,
    required: false,
    trim: true
},
phoneNumber: {
    type: String,
    required: false
},
email: {
    type: String,
    required: false
},
interests: {
    type: [String]
},
notes: {
    type: String,
    required: false
},
photo: {
    type: String
}

});