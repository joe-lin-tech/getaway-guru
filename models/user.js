const mongoose = require("mongoose");
const { tripSchema } = require("./trip.js");

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true }, // required.
    email: { type: String, unique: true }, // required.
    password: String, // required.
    dateOfBirth: Date,
    currentLocation: locationSchema,
    createdTrips: [{type: mongoose.Schema.Types.ObjectId, ref: 'Trip'}],
    likedTrips: [{type: mongoose.Schema.Types.ObjectId, ref: 'Trip'}], 
    dp: String,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
