const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  username: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["teacher", "student", "manager"], required: true },
});

module.exports = mongoose.model("User", userSchema);
