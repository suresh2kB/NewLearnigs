import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config(); // For accessing data in .env file

/* Connect to mongoDB */
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

/* Check for connection and output result. */
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected.");
});

mongoose.connection.on("connected", () => {
  console.log("mongoDB connected.");
});

export default connect;
