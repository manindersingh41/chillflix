const User = require("../models/user.js");
// const connectDb = require("../config/db.js");
const auth = {
  registerUser: async (req, res) => {
    const { userId, userName, password } = req.body;

    console.log(req.body, "hhhhhhhere");
    try {
      const existedUser = await User.findOne({ userName: userName });
      if (existedUser) {
        return res
          .status(400)
          .json({ msg: "You can't create another user with same username" });
      }

      await User.create({
        userName: userName,
        password: password,
      });

      console.log(req.body);
      return res.status(200).json({
        msg: "User Registered successfully ",
      });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },

  loginUser: (req, res) => {
    const { userName, password } = req.body;
    try {
      return res.status(200).json({
        msg: "User Login successfully ",
      });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  getUsers: async (req, res) => {
    try {
      const allUsers = await User.find({});
      return res.status(200).json({
        msg: 'Users Fetched Successfully !',
        data: allUsers

      })
    } catch(err) {
      res.status(500).json({msg: err.message})
    }
  }
};


module.exports = auth;
