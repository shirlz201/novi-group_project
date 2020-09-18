const mongoose = require('mongoose');
const Schema = mongoose.Schema;
​
const birthdaySchema = new Schema({
    Date: {
        type: Date,
        required: true,
    },
   
});
​
​
const Birthday = mongoose.model('Birthday', birthdaySchema);
module.exports = Birthday;
​
//embedding document
// exports.birthdaySchema = birthdaySchema;