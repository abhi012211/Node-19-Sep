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
async function getStudentForEdit(req, res) {
  try {
    let id = req.params.id;
    let student = await Student.findOne({ _id: id });
    console.log(student);
    res.render("studenteditfor", {
      student: student,
    });
  } catch (err) {
    console.log(err, "err");
  }
}
async function updateStudent(req, res) {
  try {
    let id = req.params.id;
    console.log(req.body, "req.body");
    let student = await Student.findOne({ _id: id });
    console.log(student);
    student.rollNo = req.body.rollNo;
    student.firstName = req.body.firstName;
    student.lastName = req.body.lastName;
    student.fatherName = req.body.fatherName;
    student.adharCardNo = req.body.adharCardNo;
    student.mobileNo = req.body.mobileNo;
    await student.save();
    let students = await Student.find({});
    res.render("studentdeatils", {
      students: students,
    });
    res.end("<h1>student  data is updated successfully</h1>");
  } catch (err) {
    console.log(err, "err");
  }
}
async function deleteStudent(req, res) {
  try {
    let id = req.params.id;
    await Student.deleteOne({ _id: id });
    let students = await Student.find({});
    res.render("studentdeatils", {
      students: students,
    });
  } catch (err) {
    console.log(err, "err");
  }
}

module.exports = {
  addstudent,
  getstudents,
  getStudentForEdit,
  updateStudent,
  deleteStudent,
};
