// const express = require("express");
import express from "express";
// const notes_controller = require("../controllers/notesController");
import notes_controller from "../controllers/notesController.js";
// const authenticateToken = require("../middleware/authMiddleware");
import { authenticateToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// Get all notes
router.get("/", authenticateToken, notes_controller.notes_list);

// Create a note
router.post("/", authenticateToken, notes_controller.notes_create_post);

// Get note by id
router.get("/:noteId", notes_controller.notes_get_id);

// Update note by id
router.put("/:noteId", notes_controller.notes_update);

// Delete note by id
router.delete("/:noteId", notes_controller.notes_delete);

// module.exports = router;
export default router;
