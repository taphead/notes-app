const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// Get list of all notes
exports.notes_list = async (req, res) => {
  const notes = await prisma.note.findMany();
  res.json(notes);
};

// Create a note
exports.notes_create_post = async (req, res) => {
  const { title, content, userId } = req.body;
  const note = await prisma.note.create({
    data: { title, content, user: { connect: { id: userId } } },
  });
  res.json(note);
};

// Get note by id
exports.notes_get_id = async (req, res) => {
  const { noteId } = req.params;
  const note = await prisma.note.findUnique({
    where: { id: Number(noteId) },
  });
  res.json(note);
};
