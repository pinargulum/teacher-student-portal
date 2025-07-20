
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const mainRouter = require("./routes/index");
const { verifyToken, checkRole } = require("./middleware/auth");

const app = express();
const PORT = process.env.PORT || 3001;
require("dotenv").config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("db is connected"))
  .catch(console.error);

app.use(cors());
app.use(express.json());

app.use("/", mainRouter);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
