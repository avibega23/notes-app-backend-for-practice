require("dotenv").config();
const app = require("./app");
const mongoose = require("mongoose");
const authRootes = require("./routes/approutes");
const express = require("express");

app.use(express.json());


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DATABASE CONNECTED");
    app.listen(process.env.PORT, () => {
      console.log(`Server running on ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("DB Connection Error", err);
  });

app.use("/api/auth", authRootes);
