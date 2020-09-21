const express = require('express');
const holidayModel = require('../models/holiday.model.js');
const router = express.Router();

//Read all holidays
router.get('/holidays', async (req, res) => {
    const holidays = await holidayModel.find({});
    try {
      res.send(holidays);
    } catch (err) {
      res.status(500).send(err);
    }
  });

 //Read a specific holiday
 router.get("/holiday/:id", async (req, res) => {
	try {
		const holiday = await holidayModel.findById(req.params.id)
		res.send(holiday)
	} catch (err){
		res.status(404).send("Holiday doesn't exist!")
	}
})

//Create a holiday
  router.post('/holiday', async (req, res) => {
    const holiday = new holidayModel(req.body);
  
    try {
      await holiday.save();
      res.send(holiday);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
  //Delete a holiday by id
  router.delete('/holiday/:id', async (req, res) => {
    try {
      const holiday = await holidayModel.findByIdAndDelete(req.params.id)
  
      if (!holiday) res.status(404).send("No item found")
      
      res.status(200).send()
    } catch (err) {
      res.status(500).send(err)
    }
  })
 
 //Update a holiday by Id
  router.patch('/holiday/:id', async (req, res) => {
    try {
      const holiday = await holidayModel.findByIdAndUpdate(req.params.id, req.body)
      await holiday.save()
      res.send(holiday)
    } catch (err) {
      res.status(500).send(err)
    }
  })


  module.exports = router;