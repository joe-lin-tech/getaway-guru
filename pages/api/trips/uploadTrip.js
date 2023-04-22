import dbConnect from '../../../lib/dbConnect'
const {Trip} = require("../../../models/trip.js");


export default async function handler(req, res) {
    await dbConnect()

    const { name } = req.body;
    const trip = new Trip({name});
    console.log(trip);
    
    try {
        await trip.save();
    } catch (err) {
        if (
            err.message.includes("duplicate")
        ) {
            return res.status(400).json({
                success: false,
                message: "An trip with that name already exists.",
            });
        }
        return res.status(400).json({
            success: false,
            message: err.message,
        });
    }

    return res.status(200).json({
        success: true,
        message: "Trip created.",
        trip
    });
    
}
