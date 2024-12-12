const jwt = require("jsonwebtoken");
const usersModel = require("../models/users_model");

module.exports = {
  async login(req, res) {
    try {
      const { id } = req.body;
      const user = await usersModel.usersDetailByID(id);

      if (user) {
        const token = jwt.sign(
          { id: user.id },
          process.env.JWT_SECRET || "defaultsecret",
          { expiresIn: "1h" }
        );
        res.json({ token });
      } else {
        res.status(401).json({ message: "Authentication failed" });
      }
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  },
};
