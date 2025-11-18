const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

// Create a user
router.post("/", authController.register_user);

module.exports = router;
