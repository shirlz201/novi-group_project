const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const holidayRoutes = require('./routes/holidayRoutes.js')
const reminderRoutes = require('./routes/reminderRoutes')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// connection to DB - in order to work - add correct ATLAS_URI variable -> (.env)
const uri = process.env.ATLAS_URI;
/*useNewUrlParser: true -> added because the MongoDB Node.js driver rewrote
 the tool it uses to parse MongoDB connection strings */
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
/*section useCreateIndex: true is similar -> it deals with MongoDB 
deprecating the ensureIndex() function */
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

/*=============SERVER API END POINTS=================
API endpoint routes are added so the server can be used
to perform CRUD operations
-Below tells the server to use the files just created-*/
const interestsRouter = require('./routes/interests');
const usersRouter = require('./routes/users');


app.use("/api", holidayRoutes)
app.use("/api", reminderRoutes)
app.use('/interests', interestsRouter);
app.use('/users', usersRouter);



app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});