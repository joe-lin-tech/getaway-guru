const mongoose = require("mongoose");
const { tripSchema } = require("./trip.js");

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true }, // required.
    email: { type: String, unique: true }, // required.
    password: String, // required.
    dateOfBirth: Date,
    currentLocation: locationSchema,
    createdTrips: [tripSchema],
    likedTrips: [tripSchema], 
    dp: String,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
