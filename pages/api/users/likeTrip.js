import dbConnect from '../../../lib/dbConnect'
const User = require("../../../models/user.js");
const Trip = require("../../../models/trip.js");



export default async function handler(req, res) {
    await dbConnect()

    const { userEmail, trip_id } = req.body;
    const user = await User.findOneAndUpdate({email: userEmail}, {"$push": { "likedTrips": trip_id } })
    const trip = await Trip.findOneAndUpdate({_id: trip_id}, {$inc: { numberOfLikes: 1 }})
    console.log(user);
    
    try {
        await user.save();
        await trip.save();
    } catch (err) {
        return res.status(400).json({
            success: false,
            message: err.message,
        });
    }

    return res.status(200).json({
        success: true,
        message: "Liked.",
        user: user,
        trip: trip

    });
    
}
