const mongoose = require("mongoose");
require("dotenv").config(); // ✅ load .env file

// ✅ MongoDB URL from .env
const mongoURL = process.env.MONGODB_URL;

// ✅ Safety check
if (!mongoURL) {
  console.error("❌ MONGODB_URL is not defined. Check your .env file");
  process.exit(1);
}

// ✅ Connect to MongoDB
mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("✅ Connected to DB");
  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error);
  });
