const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

//set up mongoose
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology:true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})


//set up express
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//add contact routers
const contactsRouter = require('./routes/contacts');
app.use('/contacts', contactsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

// const exercisesRouter = require('./routes/exercises');
// const usersRouter = require('./routes/users');
// //to use files: ex. if they visit/ - it will load user or ex router
// app.use('/exercises', exercisesRouter);
// app.use('/users', usersRouter);
