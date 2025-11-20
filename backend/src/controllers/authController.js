import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

const authController = {
  // Create a user
  register_user: async (req, res) => {
    const { email, username, password } = req.body;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await prisma.user.create({
        data: { email, username, password: hashedPassword },
      });
      res.status(201).json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "User registration failed" });
    }
  },

  // Login as user
  login_user: async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await prisma.user.findUnique({
        where: { username: username },
      });

      if (!user) return res.status(404).json({ error: "User not found" });

      const valid = await bcrypt.compare(password, user.password);
      if (!valid) return res.status(400).json({ error: "Invalid credentials" });

      const token = jwt.sign(
        { id: user.id, username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      res.json({ token, username: user.username });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Login failed" });
    }
  },
};

export default authController;
