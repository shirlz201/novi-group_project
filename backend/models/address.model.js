const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema({
    street: {type: String},
    city:{type: String},
    state:{type: String},
    zipcode: {type: String},
    country: {type: String}
});

const Address = mongoose.model('Address', addressSchema);

module.exports = Address;