const router = require('express').Router();
let User = require('../models/user.model.js');


/* 1st endpoint handles incoming GET reqs - Users.find() is a method
to get a list of ALL the users from the DB
try/catch method is used
*/
router.get('/', async (req, res) => {
    const users = await User.find({});
    try {
        res.send(users);
    } catch (err) {
        res.status(500).send(err);
    }
})

/* 2nd endpoint handles incoming POST reqs - after getting new username,
a new instance of User is CREATED
*/
router.post('/add', async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        res.send(user);
    } catch (err) {
        res.status(500).send(err);
    }

});

// returns a user with the given id
router.get('/users/:id', async (req, res) => {

    try {
        const user = await User.findById(req.params.id)
        res.send(user)
    } catch (err) {
        res.status(404).send("No user found");
    }
});

// deletes a user with the given id
router.delete('/:id', async (req, res) => {

    try {
        const user = await User.findByIdAndDelete(req.params.id)

        if (!user) res.status(404).send("No user found")
        res.status(200).send();

    } catch (err) {
        res.status(500).send(err)
    }

});

// updates an existing user 
router.patch('/update/:id', async (req, res) => {

    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body)
        await user.save();
        res.send(user)
    } catch (err) {
        res.status(500).send(err);
    }
});


module.exports = router;

