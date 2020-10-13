const router = require('express').Router();
let Contact = require('../models/contact.model');

//Read all
router.get("/contact", async (req, res) => {
    const contacts = await Contact.find();
    try {
        res.send(contacts);
    } catch (err) {
        res.status(500).send(err);
    }
});


//Read by id
router.get("/contact/:id", async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        res.send(contact);
    } catch (err) {
        res.status(404).send("Cannot find this contact");
    }
});

//Create a contact
router.post("/contact", async (req, res) => {
    const contact = new Contact(req.body);
    try {
        await contact.save();
        res.send(contact);
    } catch (err) {
        res.status(400).send(err);
    }
})


//Update contact
router.patch("/contact/:id", async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(req.params.id, req.body);
        await contact.save();
        res.send(contact);
    } catch (err) {
        res.status(400).send(err);
    }
})


//Delete contact
router.delete("/contact/:id", async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);
        res.status(200).send("Delte success");
    } catch (err) {
        res.status(500).send(err);
    }
})

module.exports = router;