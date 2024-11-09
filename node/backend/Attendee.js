const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const attendeeInfo = new Schema({
    attendeeID: String,
    firstName: String,
    lastName: String,
    email: String,
    phone: String
});

module.exports = mongoose.model('Attendee', attendeeInfo);