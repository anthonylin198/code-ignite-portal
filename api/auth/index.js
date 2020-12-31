import dbConnect from "../../dbutils/dbConnect";

import User from "../../models/User";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

module.exports = async (req, res) => {
  dbConnect();
  const { method } = req;
  switch (method) {
    case "POST":
      const { name, email, password } = req.body;
      try {
        let user = await User.findOne({ email });
        if (user) {
          res.status(400).json({ errors: [{ msg: "User already exists" }] });
        }
        user = new User({
          name,
          email,
          password,
          isAuthenticat: true,
        });
        // Encrypt password with Bcrypt and save to database
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        const userData = await User.create(user);
        // Return the jsonwebtoken
        const payload = {
          user: {
            id: user.id,
          },
        };
        jwt.sign(payload, "secret", { expiresIn: 360000 }, (err, token) => {
          if (err) throw err;
          res.status(201).json({ success: true, token });
        });
      } catch (err) {
        res.status(400).json({ success: false, error: err });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
