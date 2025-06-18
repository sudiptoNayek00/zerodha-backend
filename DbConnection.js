
require("dotenv").config();

const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGO_URI;





const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed", error);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;
