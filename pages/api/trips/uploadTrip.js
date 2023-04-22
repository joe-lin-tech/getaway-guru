import dbConnect from '../../../lib/dbConnect'
const {Trip} = require("../../../models/trip.js");


export default async function handler(req, res) {
    await dbConnect()

    if (req.method === 'POST') {
        // Handle POST request
        const { name } = req.body;
        const trip = new Trip({name});
        console.log(trip);
        await trip.save();
        return res.status(201).json(trip);
    } 
    
}
