import { hashPassword } from '../../../lib/auth';
import dbConnect from '../../../lib/dbConnect';
const User = require("../../../models/user.js");

async function handler(req, res) {
  if (req.method !== 'POST') {
    return;
  }

  const data = req.body;

  const { email, password } = data;

  if (
    !email ||
    !email.includes('@') ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({
      message:
        'Invalid input - password should also be at least 7 characters long.',
    });
    return;
  }

  await dbConnect();

  const existingUser = await User.findOne({ email: email });

  if (existingUser) {
    res.status(422).json({ message: 'User exists already!' });
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(password);
  const user = new User({
    email: email,
    password: hashedPassword,
  })
  await user.save();

  res.status(201).json({ message: 'Created user!' });
}

export default handler;