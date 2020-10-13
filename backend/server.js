const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const eventRoutes = require('./routes/eventRoutes.js');
const holidayRoutes = require('./routes/holidayRoutes.js')
const reminderRoutes = require('./routes/reminderRoutes')
const contactsRouter = require('./routes/contacts');
const usersRouter = require('./routes/users.js');
const interestsRouter = require('./routes/interests.js');
const addressesRouter = require('./routes/addresses');
const birthdayRouter = require('./routes/birthday');


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

//begins
//initialize gridfs storage engine
const multer = require('multer');
const methodOverride = require('method-override');
const GridFsStorage = require('multer-gridfs-storage');

//create storage engine
const storage = new GridFsStorage({
    url: config.mongoURI,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            //helps encrypt filename before storing it
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketname: 'uploads'
                };
                resolve(fileInfo);
            });
        });
    }
});

const upload = multer({ storage });
// ends

/*=============SERVER API END POINTS=================
API endpoint routes are added so the server can be used
to perform CRUD operations
-Below tells the server to use the files just created-*/

app.use("/api", eventRoutes);
app.use("/api", holidayRoutes)
app.use("/api", reminderRoutes)
app.use('/interest', interestsRouter);
app.use('/users', usersRouter);
app.use('/api', contactsRouter);
app.use("/api", addressesRouter);
app.use("/api", birthdayRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
