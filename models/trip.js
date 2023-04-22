const mongoose = require('mongoose')

const tripSchema = new mongoose.Schema({
    name: { type: String, unique: true },
    locations:[{

    }]
})

const Trip = mongoose.models.Trip || mongoose.model('Trip', tripSchema)
module.exports = {Trip, tripSchema}