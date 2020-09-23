const express = require('express');
const birthdayModel = require('../models/birthday.model.js');
const router = express.Router();


// Create
router.post('/birthday', async (req, res) => {
    const birthday = new birthdayModel(req.body);
    try {
        await birthday.save();
        res.send(birthday);
    } catch (err) {
        res.status(500).send(err);
    }
});

//Read 
router.get('/birthday', async (req, res) => {
    const birthday = await birthdayModel.find({});
    try {
        res.send(birthday);
    } catch (err) {
        res.status(500).send(err);
    }
});

//Update
router.patch('/birthday/:id', async (req, res) => {
    try {
        await birthdayModel.findByIdAndUpdate(req.params.id, req.body)
        await birthdayModel.save()
        res.send()
    } catch (err) {
        res.status(500).send(err)
    }
});

// Delete
router.delete('/birthday/:id', async (req, res) => {
    try {
        const birthday = await birthdayModel.findByIdAndDelete(req.params.id)

        if (!birthday) res.status(404).send("No item found")
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err)
    }
});



module.exports = router