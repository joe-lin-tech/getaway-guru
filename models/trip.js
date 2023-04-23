const mongoose = require('mongoose')

const tripSchema = new mongoose.Schema({
    name: { type: String, unique: true },
    locations:[{type: String}],
    numberOfLikes: Number,
    userEmail: String,
    reviews: [{type: String}],
    media:Array
})

const Trip = mongoose.models.Trip || mongoose.model('Trip', tripSchema)
module.exports = {Trip, tripSchema}