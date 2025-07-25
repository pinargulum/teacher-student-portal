
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const mainRouter = require("./routes/index");
const { verifyToken, checkRole } = require("./middleware/auth");

const app = express();
const PORT = process.env.PORT || 3001;

mongoose
  .connect("mongodb://127.0.0.1:27017/demo_db")
  .then(() => {
    console.log("db is connected");
  })
  .catch(console.error);



app.use(cors());
app.use(express.json());

app.use("/", mainRouter);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
