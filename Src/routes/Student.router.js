const express=require("express");
const router=express.Router();

const studentController=require("../controllers/Student.controller");
//const { verifyToken } = require("../utils/jwt");
const { verifyToken, authMiddleware } = require("../Middleware/authMiddleware");


router.post("/student/add-student",studentController.addStudent);

/*router.get("/student/get-student",verifyToken,studentController.getStudent,(req,res)=>
{
     res.json({message:"Protected data route"})
})*/

router.get("/student/get-student",authMiddleware,studentController.getStudent);

module.exports=router;