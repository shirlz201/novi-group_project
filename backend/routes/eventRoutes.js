const express = require('express');
const eventModel = require('../models/event.model.js');
const router = express.Router();

//Read All
router.get('/events', async (req, res) => {
    const events = await eventModel.find({});
    try {
        res.send(events);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Create
router.post('/event', async (req, res) => {
    const event = new eventModel(req.body);

    try {
        await event.save();
        res.send(event);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Delete
router.delete('/event/:id', async (req, res) => {
    try {
        const event = await eventModel.findByIdAndDelete(req.params.id)

        if (!event) res.status(404).send("No item found")
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err)
    }
})

//Update
router.patch('/event/:id', async (req, res) => {
    try {
        await eventModel.findByIdAndUpdate(req.params.id, req.body)
        await eventModel.save()
        res.send(food)
    } catch (err) {
        res.status(500).send(err)
    }
})

module.exports = router