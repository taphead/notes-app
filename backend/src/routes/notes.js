const express = require("express");
const notes_controller = require("../controllers/notesController");

const router = express.Router();

// Get all notes
router.get("/", notes_controller.notes_list);

// Create a note
router.post("/", notes_controller.notes_create_post);

// Get note by id
router.get("/:noteId", notes_controller.notes_get_id);

// Update note by id
router.put("/:noteId", notes_controller.notes_update);

// Delete note by id
router.delete("/:noteId", notes_controller.notes_delete);
module.exports = router;
