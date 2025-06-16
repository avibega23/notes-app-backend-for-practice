require("dotenv").config();
const app = require("./app");

const express = require("express");
const mongoose = require("mongoose");
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("✅ DATABASE CONNECTED");
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log("❌ DB Connection Error:", err));
