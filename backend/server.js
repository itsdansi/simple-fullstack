// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import morgan from "morgan";

// import * as taskRoute from "./routes/taskRoute";
// import userRoute from "./routes/userRoute";

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");

const taskRoute = require("./routes/taskRoute");
const userRoute = require("./routes/userRoute");
const checkAuth = require("./middlewares/auth");
const errorHandler = require("./middlewares/error-handler");

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan("dev"));

app.use("/tasks", checkAuth, taskRoute);
app.use("/auth", userRoute);

const port = process.env.PORT || 3000;

mongoose
  .connect("mongodb+srv://dansi:Dj%40password@todo-api.vadsdgj.mongodb.net/test")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Could not connect to MongoDB");
    console.log(err);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use(errorHandler);
