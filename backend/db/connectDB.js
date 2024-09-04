const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Connected with mongo"))
    .catch((err) => console.log("Error connecting to mongo " + err.message));
};

module.exports = connectDB;
