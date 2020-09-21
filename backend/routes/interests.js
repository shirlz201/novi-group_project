const router = require('express').Router();
let Interest = require('../models/interest.model');
const { route } = require('./users');

/* 1st endpoint handles incoming GET reqs - Interest.find() is a method
to get a list of all the interests from the DB
Find method -> returns a Promise
Results -> JSON format 
*/
router.route('/').get((req, res) => {
    Interest.find()
        .then(interests => res.json(interests))
        .catch(err => res.status(400).json('Error: ' + err));
});

/* 2nd endpoint handles incoming POST reqs - after getting new username,
a new instance of User is created -> new user is saved to the DB with the 
save() & 'user added!' is returned
*/
router.route('/add').post((req, res) => {
    const name = req.body.name;
    const icon = req.body.icon;
    const color = req.body.color;

    const newInterest = new Interest({
        name,
        icon,
        color,
    });

    newInterest.save()
        .then(() => res.json('Interests added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});
// returns an interest with the given id
router.route('/:id').get((req, res) => {
    Interest.findById(req.params.id)
        .then(interests => res.json(interests))
        .catch(err => res.status(400).json('Error: ' + err));
});
// deletes an interest with the given id
router.route('/:id').delete((req, res) => {
    Interest.findByIdAndDelete(req.params.id)
        .then(() => res.json('Interest deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});
// updates an existing interest item
router.route('/update/:id').post((req, res) => {
    Interest.findById(req.params.id)
        .then(interests => {
            interests.name = req.body.name;
            interests.icon = req.body.icon;
            interests.color = req.body.color;

            interests.save()
                .then(() => res.json('Interests updated!'))
                .catch(err => res.status(400).json('Error ' + err));
        })
            .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;