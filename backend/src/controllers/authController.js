const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// Create a User
exports.register_user = async (req, res) => {
  const { email, username, password } = req.body;
  const user = await prisma.user.create({
    data: { email, username, password },
  });
  res.json(user);
};
