const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// referencing document
const Birthday = require('./birthday.model.js');
const Holiday = require('./holiday.model.js');
const Event = require('./event.model.js');
const Interest = require('./interest.model.js');

// embedding document
// const {birthdaySchema} = require('./birthday.model.js');
// const {holidaySchema} = require('./holiday.model.js');
// const {eventSchema} = require('./event.model.js');
// const {interestSchema} = require('./interest.model.js');


const contactSchema = new Schema({
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
    notes: {
        type: String,
        required: false
    },
    photo: {
        type: String
    },

    // referencing document
    birthday: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    },
    holidays: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Holiday'
    }],
    Events: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    }],
    interests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Interest'
    }]

    // embedding document
    // birthday: {
    //     type: birthdaySchema
    // },
    // holidays: {
    //     type: [holidaySchema]
    // },
    // Events: {
    //     type: [eventSchema]
    // },
    // interests: {
    //     type: [interestSchema]
    // }
});

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;

// embedding document
// exports.contactSchema = contactSchema;