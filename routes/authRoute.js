const express = require("express");
const router = express.Router();

const auth = require("../controllers/authController.js");

router.post("/register", auth.registerUser);
router.get("/get_users", auth.getUsers)
// router.post("/login", auth.loginUser);
// router.get("/get_user", auth.getUser);

module.exports = router;
