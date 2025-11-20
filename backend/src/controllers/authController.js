const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();

// Create a user
exports.register_user = async (req, res) => {
  const { email, username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { email, username, password: hashedPassword },
    });
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "User registration failed",
    });
  }
};

// Login as user
exports.login_user = async (req, res) => {
  const { username, password } = req.body;

  const user = await prisma.user.findUnique({
    where: { username: username },
  });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).json({ error: "Invalid credentials" });

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({
    token,
    username: user.username,
  });
};
