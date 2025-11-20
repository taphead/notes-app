const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

// Create a user
router.post("/register", authController.register_user);

// Login as user
router.post("/login", authController.login_user);

module.exports = router;
