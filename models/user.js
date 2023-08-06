const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  roles: [
    {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  ],
});
// const conn = mongoose.createConnection();

// mongoose
//   .connect(`${process.env.MONGODB_URI}`, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log('Connected to the "moviesdb" database');
//   })
//   .catch((error) => {
//     console.error("Error connecting to the database", error);
//   });

const User = mongoose.model("User", userSchema, "users");

module.exports = User;
