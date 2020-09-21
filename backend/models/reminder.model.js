// ===== Reminder ===== Matias
// - birthdayId/ holidayId/ EventId
// - contactId
// - reminder String 

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reminderSchema = new Schema({
//field names
eventId: {
    type: String,
    required: true,
    trim: true
},
contactId: {
    type: String,
    required: false,
    trim: true
},
reminder: {
    type: String,
    required: false
}

});

const Reminder = mongoose.model('Reminder', reminderSchema);
module.exports = Reminder;