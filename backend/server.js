const express = require("express");
const connectDB = require("./db/connectDB");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());

app.use("/", require("./routes/productRoute"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app is running at ${PORT}`);
  connectDB();
});
