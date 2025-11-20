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
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
