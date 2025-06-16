const jwt = require("jsonwebtoken");
const express = require("express");
function jwtVerify(req,res,next)
{
    const username = req.body.username;
    const token = jwt.sign(
        {userId : username},
        process.env.JWT_SECRET,
    );
    req.body.token = token;
    next()  
}
function authrizer(req,res,next)
{
     const token = req.header.token;
    try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.body.user = decoded; // put userId on req for access in next function
    next();
  } catch (err) {
    return res.status(401).json({ msg: "Invalid token" });
  }
}


module.exports = {jwtVerify,authrizer}