const express = require("express");
const connectDB = require("./db/connectDB");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(cors());
connectDB();

app.use(express.json());

app.use("/api", require("./routes/productRoute"));

app.use("*", (req, res, next) => {
  next(new Error("this route not found"));
});

const PORT = process.env.PORT || 5000;
const server = app.listen(
  PORT,
  console.log(`server is running on port ${PORT}`)
);
process.on("unhandledRejection", (err) => {
  console.log(`unhandledRejection Error: ${err.message}`);
  server.close(() => {
    console.log("shutting down.........");
    process.exit(1);
  });
});
