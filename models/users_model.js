const connection = require("../db");

async function users() {
  const [result] = await connection.execute("SELECT * FROM users");
  return result;
}

async function usersDetailByID(id) {
  try {
    const [result] = await connection.execute(
      "SELECT * FROM users WHERE id = ?",
      [id]
    );
    return result;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  users,
  usersDetailByID,
};
