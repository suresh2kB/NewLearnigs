import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import usersRoute from "./routes/users.js";
import mongoConnect from "./connections/mongoDB.js";
const app = express();
dotenv.config(); // For accessing data in .env file

/* Middlewares. */
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

/* Specify port to listen. */
app.listen(8800, () => {
  mongoConnect();
  console.log("Connected to backend.");
});
