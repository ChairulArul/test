require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

const authRoutes = require("./routes/auth_routes");
const webRoutes = require("./routes/web.js");

app.use("/auth", authRoutes);
app.use("/web", webRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
