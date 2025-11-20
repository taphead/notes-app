// const express = require("express");
import express from "express";
// const authController = require("../controllers/authController");
import authController from "../controllers/authController.js";

const router = express.Router();

// Create a user
router.post("/register", authController.register_user);

// Login as user
router.post("/login", authController.login_user);

// module.exports = router;
export default router;
