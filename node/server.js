const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Attendee = require('./backend/Attendee.js');
const connectDB = require('./db/connect');
const cors = require('cors');

const app = express()
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());


connectDB();

// POST route to save attendee data
app.post('/api/attendees', async (req, res) => {
    const { attendeeID, firstName, lastName, email, phone } = req.body;
    if(!firstName || !lastName){
        return res.status(400).json({"message": 'First and last name required!'});
    }
    // console.log(attendeeID, firstName, lastName, email, phone,"from server.js");
    try {
        const attendee = new Attendee({ attendeeID, firstName, lastName, email, phone });
        await attendee.save();
        res.status(201).json({ message: 'Attendee saved successfully' });
    } catch (error) {
            res.status(500).json({ message: 'Error saving attendee', error });
    }
});

app.get('/api/attendees', async (req, res) => {
    try {
        const attendees = await Attendee.find(); // Retrieve all documents
        res.json(attendees); // Send the result as JSON
    } catch (error) {
        console.error('Error retrieving attendees:', error);
        res.status(500).json({ message: 'Error retrieving attendees' });
    }
});

mongoose.connection.once("open", () => {
    console.log("Connected to DB");
    app.listen(5500);
});