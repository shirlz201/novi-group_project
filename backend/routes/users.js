const router = require('express').Router();
let User = require('../models/user.model');

/* 1st endpoint handles incoming GET reqs - Users.find() is a method
to get a list of all the users from the DB
Find method -> returns a Promise
Results -> JSON format 
*/
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

/* 2nd endpoint handles incoming POST reqs - after getting new username,
a new instance of User is created -> new user is saved to the DB with the 
save() & 'user added!' is returned
*/
router.route('/add').post((req, res) => {

    const profilepic = req.body.profilepic;
    const username = req.body.username;
    const password = req.body.password;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const phonenumber = req.body.phonenumber;
    const email = req.body.email;

    const newUser = new User({
        profilepic,
        username,
        password,
        firstname,
        lastname,
        phonenumber,
        email,
    });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// returns a user with the given id
router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});
// deletes a user with the given id
router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});
// updates an existing user item
router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
        .then(users => {

            users.profilepic = req.body.profilepic;
            users.username = req.body.username;
            users.password = req.body.password;
            users.firstname = req.body.firstname;
            users.lastname = req.body.lastname;
            users.phonenumber = req.body.phonenumber;
            users.email = req.body.email;

            users.save()
                .then(() => res.json('User updated!'))
                .catch(err => res.status(400).json('Error ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;