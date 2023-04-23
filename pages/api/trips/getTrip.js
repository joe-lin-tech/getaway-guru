import dbConnect from '../../../lib/dbConnect'
const {Trip} = require("../../../models/trip.js");


export default async function handler(req, res) {
    dbConnect();

  try {
    const trips = await Trip.findOne({});
    res.json(trips);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
