const mongoose = require("mongoose");
require("dotenv").config();

// connect to mongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGO_URI || "mongodb://localhost:27017/myapp"
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

// handle connection events
mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

mongoose.connection.on("err", (err) => {
  console.error("MongoDB error", err);
});

module.exports = connectDB;
