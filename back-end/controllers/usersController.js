const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/users");
const JWT_SECRET  = require("../utils/config");

function getRoleByAccessCode(code) {
  if (code === "123") return "teacher";
  if (code === "456") return "student";
  
  return null;
}

// Register
const createUser = async (req, res, next) => {
  const { name, lastname, username, password, accessCode } = req.body;

  if (!username || !password || !accessCode) {
    return res.status(400).json({ message: "Missing required fields." });
  }

  const role = getRoleByAccessCode(accessCode);
  if (!role) return res.status(400).json({ message: "Invalid access code." });

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    name,
    lastname,
    username,
    password: hashedPassword,
    role,
  });
  try {
    await newUser.save();
    res.status(201).json({ message: "Registration successful." });
  } catch (error) {
    console.error("Save error:", error);
    res.status(500).json({ message: "Failled to register user" });
  }
};
// Login
const login = async (req, res, next) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) return res.status(404).json({ message: "User not found." });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ message: "Incorrect password." });

  const token = jwt.sign(
    { username: user.username, role: user.role },
    JWT_SECRET,
    {
      expiresIn: "1h",
    },
  );

  res.json({ message: "Login successful.", token, role: user.role });
};
const teacherOptions = (req, res) => {
  res.json({ message: "Teacher options access successfully", user: req.user });
};
const createClass = (req, res) => {
  res.json({ message: "Create class accessed successfully", user: req.user });
};
const rolePermissions = {
  manager: ["teacher", "student"],
};

function canViewRole(viewerRole, targetRole) {
  const allowedRoles = rolePermissions[viewerRole] || [];
  return allowedRoles.includes(targetRole);
}
const getUsersByRole = async (req, res) => {
  try {
    const targetRole = req.query.role;
    const viewerRole = req.user.role; 

    if (!targetRole) {
      return res.status(400).json({ message: "Target role is required." });
    }

    if (!canViewRole(viewerRole, targetRole)) {
      return res.status(403).json({ message: "Access denied." });
    }

    const users = await User.find({ role: targetRole });
    return res.json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    return res.status(500).json({ message: "Server error." });
  }
};

module.exports = {
  createUser,
  login,
  teacherOptions,
  createClass,
  getUsersByRole,
};
