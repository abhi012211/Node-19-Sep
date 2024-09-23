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
module.exports=router