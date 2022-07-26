const mongoose = require("mongoose");
// const config = require("config");
// const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://jhleyadmin:zxcvbnmlp@cluster0.ocgw7.mongodb.net/?retryWrites=true&w=majority');
    console.log("MongoDB Conneted...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
