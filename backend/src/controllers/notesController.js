import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const notes_controller = {
  // Get list of all notes
  notes_list: async (req, res) => {
    const notes = await prisma.note.findMany();
    res.json(notes);
  },

  // Create a note
  notes_create_post: async (req, res) => {
    const { title, content } = req.body;
    const userId = req.user.id;
    const note = await prisma.note.create({
      data: { title, content, user: { connect: { id: userId } } },
    });
    res.json(note);
  },

  // Get note by id
  notes_get_id: async (req, res) => {
    const { noteId } = req.params;
    const userId = req.user.id;
    const note = await prisma.note.findUnique({
      where: { id: Number(noteId), userId },
    });
    res.json(note);
  },

  // Update note by id
  notes_update: async (req, res) => {
    const { noteId } = req.params;
    const { title, content } = req.body;
    const userId = req.user.id;
    const note = await prisma.note.update({
      where: { id: Number(noteId), userId },
      data: { title, content },
    });
    res.json(note);
  },

  // Delete note by id
  notes_delete: async (req, res) => {
    const { noteId } = req.params;
    const userId = req.user.id;
    await prisma.note.delete({
      where: { id: Number(noteId), userId },
    });
    res.json({ message: "Note Deleted" });
  },
};

export default notes_controller;
