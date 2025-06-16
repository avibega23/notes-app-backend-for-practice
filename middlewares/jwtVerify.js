const jwt = require("jsonwebtoken");
const express = require("express");
function jwtVerify(req, res, next) {
  const username = req.body.username;
  const token = jwt.sign({ userId: username }, process.env.JWT_SECRET);
  req.body.token = token;
  next();
}
function authrizer(req, res, next) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.body.username = decoded.username; // put userId on req for access in next function
    next();
  } catch (err) {
    return res.status(401).json({ msg: "Invalid token" });
  }
}

module.exports = { jwtVerify, authrizer };
