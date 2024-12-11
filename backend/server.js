import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import driveRoutes from"./routes/drives.routes.js"

dotenv.config();

const app = express();

// Middleware to parse JSON request body
app.use(express.json());

// Connect to the database
connectDB();

app.use("/api/drives",driveRoutes)


// Start the server
app.listen(5000, () => {
  console.log("The server has been started at http://localhost:5000");
});
