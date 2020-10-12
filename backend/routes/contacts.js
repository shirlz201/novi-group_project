const router = require('express').Router();
let Contact = require('../models/contact.model');

router.route('/').get((req, res) => {
    Contact.find()
        .then(contacts => res.json(contacts))
        .catch(err => res.status(400).json('Error: ' + err))
});

//Read all
router.get("/contact", async (req, res) => {
    const contacts = await Contact.find();
    try {
        res.send(contacts);
    } catch (err) {
        res.status(500).send(err);
    }
});

// router.route('/:id').get((req, res) => {
//     Contact.findById(req.params.id)
//         .then(contacts => res.json(contacts))
//         .catch(err => res.status(400).json('Error: ' + err))
// });

//Read by id
router.get("/contact/:id", async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        res.send(contact);
    } catch (err) {
        res.status(404).send("Cannot find this contact");
    }
});

// router.route('/add').post((req, res) => {

//     // let newContact = new Contact();
//     // newContact.firstName = req.body.firstName;
//     // newContact.lastName = req.body.lastName;
//     // newContact.phoneNumber = req.body.phoneNumber;
//     // newContact.email = req.body.email;
//     // newContact.notes = req.body.notes;
//     // newContact.photo = req.body.photo;

//     // newContact.birthday = req.body.birthday;
//     // newContact.holiday = req.body.holiday;
//     // newContact.event = req.body.event;
//     // newContact.interest = req.body.interest;

//     let newContact = new Contact({
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         phoneNumber: req.body.phoneNumber,
//         email: req.body.email,
//         notes: req.body.notes,
//         photo: req.body.photo,

//         birthday: req.body.birthday,
//         holidays: req.body.holidays,
//         events: req.body.events,
//         interests: req.body.interests
//     });

//     newContact.save()
//         .then(() => res.json('Contact added.'))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

//Create a contact
router.post("/contact/:id", async (res, req) => {
    const contact = new Contact(req.body);
    try {
        await contact.save();
        res.send(contact);
    } catch (err) {
        res.status(500).send(err);
    }
})

// router.route('/update/:id').post((req, res) => {
//     Contact.findById(req.params.id)
//         .then(contact => {
//             contact.firstName = req.body.firstName;
//             contact.lastName = req.body.lastName;
//             contact.phoneNumber = req.body.phoneNumber;
//             contact.email = req.body.email;
//             contact.notes = req.body.notes;
//             contact.photo = req.body.photo;

//             newContact.birthday = req.body.birthday;
//             newContact.holiday = req.body.holiday;
//             newContact.event = req.body.event;
//             newContact.interest = req.body.interest;

//             contact.save()
//                 .then(() => res.json('Contact updated.'))
//                 .catch(err => res.status(400).json('Error: ' + err));
//         });
// });

//Update contact
router.patch("/contact/:id", async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(req.param.id, req.body);
        await contact.save();
        res.send(contact);
    } catch (err) {
        res.status(500).send(err);
    }
})

// router.route('/:id').delete((req, res) => {
//     Contact.findByIdAndDelete(req.params.id)
//         .then(() => res.json('Contact deleted.'))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

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