import express from "express";
import authController from "../controllers/authController.js";

const router = express.Router();

// Create a user
router.post("/register", authController.register_user);

// Login as user
router.post("/login", authController.login_user);

export default router;
