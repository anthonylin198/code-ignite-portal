import dbConnect from "../../dbutils/dbConnect";

import User from "../../models/User";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// ! user signup, and get specific user based off JWT

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
          isAuthenticated: true,
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
    case "GET":
      try {
        // todo middleware
        const token = req.headers["x-auth-token"];
        // check if no token
        if (!token) {
          return res
            .status(401)
            .json({ msg: "No token, authorization denied" });
        }
        // Verify Token
        const decoded = jwt.verify(token, "secret");
        req.user = decoded.user;
        const user = await User.findById(req.user.id).select("-password"); // req.user is set in the auth.js middleware
        res.status(200).json(user);
      } catch (error) {
        res.status(400).json({ success: false, msg: "Token not valid" });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
