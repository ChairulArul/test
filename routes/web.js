const express = require("express");
const routes = express.Router();
const authRoutes = require("./auth_routes");

routes.use("/auth", authRoutes);

// tambahkan rute lainnya dibawah seperti:
// routes.use('/users', usersRoutes);

module.exports = routes;
