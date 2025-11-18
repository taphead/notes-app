require("dotenv").config();
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");
const notesRoutes = require("./routes/notes.js");
const authRoutes = require("./routes/auth.js");

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/notes", notesRoutes);
app.use("/api/register", authRoutes);

// Delete note
app.delete("/notes/:id", async (req, res) => {
  const { id } = req.params;
  await prisma.note.delete({ where: { id: Number(id) } });
  res.json({ message: "Note deleted" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
