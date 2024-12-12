const usersModel = require("../models/users_model");

module.exports = {
  async getAllUsers(req, res) {
    try {
      const users = await usersModel.users();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  },

  async getUserById(req, res) {
    try {
      const user = await usersModel.usersDetailByID(req.params.id);
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  },

  async createUser(req, res) {
    try {
      const result = await usersModel.createUser(req.body);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  },

  async updateUser(req, res) {
    try {
      const result = await usersModel.updateUser(req.params.id, req.body);
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  },

  async deleteUser(req, res) {
    try {
      const result = await usersModel.deleteUser(req.params.id);
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  },
};
