const express = require('express');
const birthdayModel = require('../models/birthday.model.js');
const router = express.Router();

//Read All
router.get('/addresses', async (req, res) => {
    const addresses = await addressModel.find({});
    try {
        res.send(addresses);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Create
router.post('/address', async (req, res) => {
    const address = new addressModel(req.body);

    try {
        await address.save();
        res.send(address);
    } catch (err) {
        res.status(500).send(err);
    }