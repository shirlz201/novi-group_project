const express = require('express');
const reminderModel = require('../models/reminder.model.js');
const router = express.Router();

//Read all reminders
router.get('/reminders', async (req, res) => {
    const reminders = await reminderModel.find({});
    try {
      res.send(reminders);
    } catch (err) {
      res.status(500).send(err);
    }
  });

 //Read a specific reminder
 router.get("/reminder/:id", async (req, res) => {
	try {
		const reminder = await reminderModel.findById(req.params.id)
		res.send(reminder)
	} catch (err){
		res.status(404).send("Reminder doesn't exist!")
	}
})

//Create a reminder
  router.post('/reminder', async (req, res) => {
    const reminder = new reminderModel(req.body);
  
    try {
      await reminder.save();
      res.send(reminder);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
  //Delete a reminder by id
  router.delete('/reminder/:id', async (req, res) => {
    try {
      const reminder = await reminderModel.findByIdAndDelete(req.params.id)
  
      //Following line does not work
      // if (!reminder) res.status(404).send("No item found")
      
      res.status(200).send("Delete success")
    } catch (err) {
      res.status(500).send(err)
    }
  })
 
 //Update a reminder by Id
  router.patch('/reminder/:id', async (req, res) => {
    try {
      const reminder = await reminderModel.findByIdAndUpdate(req.params.id, req.body)
      await reminder.save()
      res.send(reminder)
    } catch (err) {
      res.status(500).send(err)
    }
  })


  module.exports = router;