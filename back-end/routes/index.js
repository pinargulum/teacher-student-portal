const express = require("express");

const router = express.Router();



const { createUser, login, teacherOptions, createClass, getUsersByRole } = require("../controllers/usersController");

const { verifyToken, checkRole } = require("../middleware/auth")

router.post("/signup", createUser);
router.post("/signin", login);

router.get("/teacher-options", verifyToken, checkRole("teacher"), teacherOptions);
router.get("/create-class", verifyToken, checkRole("teacher"), createClass);

router.get("/users", verifyToken, getUsersByRole);

module.exports = router;
