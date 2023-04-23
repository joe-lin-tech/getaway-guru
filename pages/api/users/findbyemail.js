import dbConnect from '../../../lib/dbConnect'
const User = require("../../../models/user.js");


export default async function handler(req, res) {
    await dbConnect()

    const { name, email } = req.body;
    console.log(name);
    const user = new User({name: name, email: email});
    console.log(user);
    
    try {
        await user.save();
    } catch (err) {
        if (
            err.message.includes("duplicate")
        ) {
            return res.status(200).json({
                success: true,
                message: "An user with that name already exists.",
            });
        }
        return res.status(400).json({
            success: false,
            message: err.message,
        });
    }

    return res.status(200).json({
        success: true,
        message: "User created.",
        user
    });
    
}
