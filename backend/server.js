const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const holidayRoutes = require('./routes/holidayRoutes.js')
const reminderRoutes = require('./routes/reminderRoutes')

require('dotenv').config();

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology:true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api", holidayRoutes)
app.use("/api", reminderRoutes)


// const exercisesRouter = require('./routes/exercises');
// const usersRouter = require('./routes/users');
// //to use files: ex. if they visit/ - it will load user or ex router
// app.use('/exercises', exercisesRouter);
// app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});