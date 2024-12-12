const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users_controller");
const authMiddleware = require("../middleware/auth");

router.get("/users", authMiddleware, usersController.getAllUsers);
router.get("/users/:id", authMiddleware, usersController.getUserById);
router.post("/users", authMiddleware, usersController.createUser);
router.put("/users/:id", authMiddleware, usersController.updateUser);
router.delete("/users/:id", authMiddleware, usersController.deleteUser);

module.exports = router;
