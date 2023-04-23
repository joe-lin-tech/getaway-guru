import dbConnect from '../../../lib/dbConnect'
const User = require("../../../models/user.js");


export default async function handler(req, res) {
    await dbConnect()

    try {
        const user = await User.findOne({email: req.body.email});
        // res.json(user);
        console.log(user);
        if(user){
          return res.status(200).json({
            success: true,
            message: "User found.",
            user
          });
        } else{
          console.log("no user??!")
        }
      } catch (err) {
        res.status(400).json({ error: err.message });
      }

    
    
}
