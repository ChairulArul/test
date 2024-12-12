const db = require("../db");

module.exports = {
  async users() {
    try {
      const [rows] = await db.query("SELECT * FROM users");
      return rows;
    } catch (error) {
      throw error;
    }
  },

  async usersDetailByID(id) {
    try {
      const [rows] = await db.query("SELECT * FROM users WHERE id = ?", [id]);
      return rows[0];
    } catch (error) {
      throw error;
    }
  },

  async createUser(userData) {
    try {
      const [result] = await db.query("INSERT INTO users SET ?", [userData]);
      return result;
    } catch (error) {
      throw error;
    }
  },

  async updateUser(id, userData) {
    try {
      const [result] = await db.query("UPDATE users SET ? WHERE id = ?", [
        userData,
        id,
      ]);
      return result;
    } catch (error) {
      throw error;
    }
  },

  async deleteUser(id) {
    try {
      const [result] = await db.query("DELETE FROM users WHERE id = ?", [id]);
      return result;
    } catch (error) {
      throw error;
    }
  },
};
