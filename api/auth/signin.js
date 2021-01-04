// login the user. Check the username with the database, make sure password matches

import dbConnect from "../../dbutils/dbConnect";

import User from "../../models/User";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

module.exports = async (req, res) => {
  dbConnect();
  const { method } = req;
  switch (method) {
    case "POST":
      const { email, password } = req.body;
      try {
        let user = await User.findOne({ email });
        if (!user) {
          return res
            .status(400)
            .json({ errors: [{ msg: "Invalid Credentials" }] });
        }
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
          return res
            .status(400)
            .json({ errors: [{ msg: "Invalid Credentials" }] });
        }

        // Return the jsonwebtoken
        const payload = {
          user: {
            id: user.id,
          },
        };
        jwt.sign(payload, "secret", { expiresIn: 360000 }, (err, token) => {
          if (err) throw err;
          res.json({ token });
        });
        break;
      } catch (err) {
        res.status(500).send("Servor Error");
      }
  }
};
