const pool = require("../db"); // Import koneksi database

// Fungsi untuk mendapatkan detail pengguna berdasarkan ID
const userDetailByID = async (req, res) => {
  const { id } = req.params;

  try {
    // Query untuk mengambil data pengguna berdasarkan ID
    const [rows] = await pool.query("SELECT * FROM users WHERE id = ?", [id]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(rows[0]); // Kirimkan data pengguna
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  userDetailByID,
};
