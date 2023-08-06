const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const db = async (dbName) => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    if (connection) {
      console.log("db is connected");
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = db;
