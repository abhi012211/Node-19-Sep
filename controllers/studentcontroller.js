const Student = require("../models/Student");

async function addstudent(req, res) {
  try {
    console.log(req.body);
    let student = new Student(req.body);
    await student.save();
    res.render("studentadd");
    //res.end("<h1>data is added successfully</h1>")
  } catch (err) {
    console.log(err);
  }
}
async function getstudents(req, res) {
  try {
    let students = await Student.find({});
    console.log(students);
    //res.send(students);
    res.render("studentdeatils", {
      students: students,
    });
  } catch (err) {
    console.log(err);
  }
}
module.exports = {
  addstudent,
  getstudents,
};
