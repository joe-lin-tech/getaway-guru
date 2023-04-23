import dbConnect from '../../../lib/dbConnect'
const { Trip } = require("../../../models/trip.js");


export default async function handler(req, res) {
    dbConnect();

  try {
    const trip = await Trip.findOne({_id: req.body.id});
    // res.json(user);
    console.log(trip);
    if(trip){
      return res.status(200).json({
        success: true,
        message: "Trip found.",
        trip
      });
    } else{
      console.log("no trip??!")
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
