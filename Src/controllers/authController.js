
const authService=require("../services/authService");
//const jwt=require("jsonwebtoken")

const jwt=require("../utils/jwt")

async function signup(req,res)
{
  try{
    const {username,password}=req.body;
    await authService.signup(username,password);
    res.sendStatus(201);
  }
  catch(err)
  {
    res.status(400).json({err:err.message})
  }
}
async function login(req,res)
{
  try{
    const {username,password}=req.body;
    const user=await  authService.login(username,password);
    const token=jwt.generateToken({userId:user._id});

    res.cookie("token",token,{httpOnly:true})
    res.json({token});

  }
  catch(err)
  {
    res.status(401).json({err:err.message})
  }
}

module.exports={
  signup,
  login
}