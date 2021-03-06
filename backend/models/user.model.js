const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({

    profilepic: { type: String },
    username: { type: String, required: true },
    password: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    phonenumber: { type: String, required: true },
    email: { type: String, required: true }

});


const User = mongoose.model('User', userSchema);

module.exports = User;


