const express=require("express");
const authController=require("../controllers/authController");

const { verifyToken } = require("../utils/jwt");

const router=express.Router();

router.post("/signup",authController.signup);
router.post("/login",authController.login);

router.get("/data",verifyToken,(req,res)=>
{
     res.json({message:"Protected data route"})
})

module.exports=router;