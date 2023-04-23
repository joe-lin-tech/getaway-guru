import dbConnect from '../../../lib/dbConnect'
const {Trip} = require("../../../models/trip.js");
const User = require("../../../models/user.js");
import mongoose from 'mongoose';



export default async function handler(req, res) {
    await dbConnect()

    const { name, locations, media, userEmail, city } = req.body;
    var myId = new mongoose.Types.ObjectId();
    const trip = new Trip({
        _id: myId,
        name: name,
        locations: locations,
        numberOfLikes: 0,
        media: media,
        userEmail: userEmail,
        city: city
    });

    

    console.log(trip);
    
    try {
        await trip.save();
        // console.log(result);
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

    await User.findOneAndUpdate(
        {email: userEmail}, {$push: { createdTrips: trip._id }}
    );

    return res.status(200).json({
        success: true,
        message: "Trip created.",
        trip
    });
    
}
