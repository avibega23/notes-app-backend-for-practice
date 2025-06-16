const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const zodVerify = require("../middlewares/zodMiddleware");
const { jwtVerify, authrizer } = require("../middlewares/jwtVerify");
const User = require("../models/userModel");

app.use(authrizer);
router.get("/api/notes/", (req, res) => {
  console.log(req.body.username);
});

router.post("/api/notes/", (req, res) => {});

router.post("/api/notes/:id", (req, res) => {});

router.delete("/api/notes/:id", (req, res) => {});
