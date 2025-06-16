const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const zodVerify = require("../middlewares/zodMiddleware");
const { jwtVerify, authrizer } = require("../middlewares/jwtVerify");
const User = require("../models/userModel");

router.post("/register/", zodVerify, async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const user = new User({ name: username, email, password: password });
  await user.save();
  res.json({ msg: "USER REGISTERED" });
});

router.post("/login/", zodVerify, jwtVerify, async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await User.findOne({ name: username });
  if (!user) {
    return res.status(401).json("USER NOT FOUND");
  }
  if (user.password != password) {
    return res.status(401).json("Invalid Credentials");
  }
  const token = jwt.sign(
    { userId: user._id, name: user.username },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );
  res.headers.authorization = token;

  return res.status(200).json({ msg: "Login successful", token });
});
module.exports = router;
