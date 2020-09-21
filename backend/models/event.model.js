const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//referencing document
// const Address = require('./address.model.js');

//embedding document
const {addressSchema} = require('./address.model.js');

const eventSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    theme: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: false
    },
    startDateTime: {
        type: Date,
        required: false
    },
    endDateTime: {
        type: Date,
        required: false
    },

    //referencing document
    // location: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Address'
    // }],

    // embedding document
    location: {
        type: addressSchema
    },

});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;

//embedding document
module.exports.eventSchema = eventSchema;