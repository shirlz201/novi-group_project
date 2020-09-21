const router = require('express').Router();
let Contact = require('../models/contact.model');

router.route('/').get((req, res) => {
    Contact.find()
        .then(contacts => res.json(contacts))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/:id').get((req, res) => {
    Contact.findById(req.params.id)
        .then(contacts => res.json(contacts))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {

    // let newContact = new Contact();
    // newContact.firstName = req.body.firstName;
    // newContact.lastName = req.body.lastName;
    // newContact.phoneNumber = req.body.phoneNumber;
    // newContact.email = req.body.email;
    // newContact.notes = req.body.notes;
    // newContact.photo = req.body.photo;

    // newContact.birthday = req.body.birthday;
    // newContact.holiday = req.body.holiday;
    // newContact.event = req.body.event;
    // newContact.interest = req.body.interest;

    let newContact = new Contact({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        notes: req.body.notes,
        photo: req.body.photo,

        birthday: req.body.birthday,
        holidays: req.body.holidays,
        events: req.body.events,
        interests: req.body.interests
    });

    newContact.save()
        .then(() => res.json('Contact added.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Contact.findById(req.params.id)
        .then(contact => {
            contact.firstName = req.body.firstName;
            contact.lastName = req.body.lastName;
            contact.phoneNumber = req.body.phoneNumber;
            contact.email = req.body.email;
            contact.notes = req.body.notes;
            contact.photo = req.body.photo;

            newContact.birthday = req.body.birthday;
            newContact.holiday = req.body.holiday;
            newContact.event = req.body.event;
            newContact.interest = req.body.interest;

            contact.save()
                .then(() => res.json('Contact updated.'))
                .catch(err => res.status(400).json('Error: ' + err));
        });
});

router.route('/:id').delete((req, res) => {
    Contact.findByIdAndDelete(req.params.id)
        .then(() => res.json('Contact deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;