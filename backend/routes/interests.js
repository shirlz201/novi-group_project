const router = require('express').Router();
let Interest = require('../models/interest.model.js');
const { route } = require('./users');

// 1st endpoint handles incoming GET reqs to READ ALL
router.get('/', async (req, res) => {
    const interests = await Interest.find({});
    try {
        res.send(interests);
    } catch (err) {
        res.status(500).send(err);
    }
});

// 2nd endpoint handles incoming POST reqs to ADD
router.post('/interest', async (req, res) => {
    const interest = new Interest(req.body);

    try {
        await interest.save();
        res.send(interest);
    } catch (err) {
        res.status(500).send(err);
    }
});

// 3rd endpoint handles GET reqs to READ BY ID
router.get("/:id", async (req, res) => {
    try {
        const interest = await Interest.findById(req.params.id)
        res.send(interest);
    } catch (err) {
        res.status(404).send("Interest does not exist");
    }
});

// 4th endpoint handles DELETE reqs to DELETE BY ID
router.route('/:id', async (req, res) => {
    try {
        const interest = await Interest.findByIdAndDelete(req.params.id)

        if (!interest) res.status(404).send("No interest found")
        res.status(500).send(err)
    } catch (err) {
        res.status(404).send("Interest deleted");
    }
});
// 5th endpoint handles PATCH reqs to UPDATE 
router.patch('/update/:id', async (req, res) => {
    try {
        const interest = await Interest.findByIdAndUpdate(req.params.id, req.body)
        await interest.save();
        res.send(interest)
    } catch (err) {
        res.status(500).send(err)
    }
});

module.exports = router;