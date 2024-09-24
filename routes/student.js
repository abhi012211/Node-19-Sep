const express=require('express')
const router=express.Router()
const studentControler=require('../controllers/studentcontroller')
router.use(express.urlencoded({extended:false}))


router.get('/',(req,res)=>{
    res.render('home')
})
router.post('/add/student',(req,res)=>{
    studentControler.addstudent(req,res)
})
router.get('/students',(req,res)=>{
    studentControler.getstudents(req,res)
})
router.get("/student/edit/page/:id",(req,res)=>{
    studentControler.getStudentForEdit(req,res)
})
router.post('/update/student/:id',(req,res)=>{
    studentControler.updateStudent(req,res)
})
router.get('/delete/student/:id',(req,res)=>{
    studentControler.deleteStudent(req,res)
})
module.exports=router