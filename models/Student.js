const { type } = require("express/lib/response");
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const studentSchema = new schema({
  rollNo: { type: String,required:true },
  firstName: { type: String },
  lastName: { type: String },
  fatherName: { type: String },
  adharCardNo: { type: String },
  mobileNo: { type: String },
});
module.exports = mongoose.model("Student", studentSchema);
