const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const mainRouter = require("./routes/index");
const { verifyToken, checkRole } = require("./middleware/auth");

dotenv.config();
const app = express();
const { PORT = 3001 } = process.env;
mongoose
  .connect("mongodb://127.0.0.1:27017/demo_db")
  .then(() => {
    console.log("db is connected");
  })
  .catch(console.error);

app.use(cors());
app.use(express.json());

app.use("/", mainRouter);

app.listen(process.env.PORT || 3001, () => {
  console.log("server is running");
});
