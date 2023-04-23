const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true }, // required.
    name: String, // required.
    createdTrips: [{type: mongoose.Schema.Types.ObjectId, ref: 'Trip'}],
    likedTrips: [{type: mongoose.Schema.Types.ObjectId, ref: 'Trip'}], 
});


const User = mongoose.models.User || mongoose.model("User", userSchema);
module.exports = User;
