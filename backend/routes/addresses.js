const express = require('express');
const addressModel = require('../models/address.model.js');
const router = express.Router();


// Create address
router.post('/address', async (req, res) => {
    const address = new addressModel(req.body);
    try {
        await address.save();
        res.send(address);
    } catch (err) {
        res.status(500).send(err);
    }
});

//Read 
router.get('/addresses', async (req, res) => {
    const addresses = await addressModel.find({});
    try {
        res.send(addresses);
    } catch (err) {
        res.status(500).send(err);
    }
});

//Read by ID
router.get("/address/:id", async (req, res) => {
	try {
		const address = await addressModel.findById(req.params.id)
		res.send(address)
	} catch (err){
		res.status(404).send("That address doesn't exist!")
	}
});

//Update
router.patch('/address/:id', async (req, res) => {
    try {
        const address = await addressModel.findByIdAndUpdate(req.params.id, req.body)
        await address.save()
        res.send(address)
    } catch (err) {
        res.status(500).send(err)
    }
});

// Delete
router.delete('/address/:id', async (req, res) => {
    try {
        const address = await addressModel.findByIdAndDelete(req.params.id)

        if (!address) res.status(404).send("No item found")
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err)
    }
});



module.exports = router