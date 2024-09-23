const mongoose = require("mongoose");

async function connection() {
  try {
    let connect = await mongoose.connect(
      `mongodb://127.0.0.1:27017/batch-1-New`
    );
    console.log("Connected to MongoDB");
    //await mongoose.connect('mongodb://localhost:27017')
  } catch (err) {
    console.log(err.message, "msg");
  }
}
module.exports = connection;
