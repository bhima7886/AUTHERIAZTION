/*const jwt=require("../utils/jwt");
function verifyToken(req,res,next)
{
  //const token=req.cookies.token;
 //const token=req.headers.authorization;
 //const token=req.header("Authorization");
 console.log("request.Header ******************************",req.headers.cookie);
 const token=req.headers.cookie;
 console.log("token")
  console.log("token"+" ********"+token);
  if(!token)
  {
    return res.status(401).json({error:"unauthorized"});
  }
  try{
    console.log("token is goted"+""+token);
    const decoded=jwt.verifyToken(token);
  

    console.log("decoded"+"************* "+decoded);
    req.userId=decoded.userId;
    next();
  }
  catch(error)
  {
    return res.status(401).json({error:"Invalid token"});
  }
}
module.exports={
  verifyToken
}
*/

const jwt=require("jsonwebtoken");
const secretKey='userapi';
function authMiddleware(req,res,next)
{
 // const token=req.cookies.token;
 //const token=req.headers.authorization;
 //const token=req.header('Authorization');
 //const token=req.headers.cookie;
//const token=req.cookies.token;
const token = req.headers.authorization.split(' ')[1];
console.log("Tokensl;jfffff"+token);
  if(!token)
  {
    return res.status(401).json({error:'Unauthorized'});
  }
  try{
    console.log("Token"+" *********=-"+token);
   // const decoded=jwt.verify(token,secretKey);
    const decoded=jwt.verify("Bearer"+token,secretKey);
    console.log("decoded"+" "+decoded);
    req.userId=decoded.userId;
    next();
  }
  catch(error)
  {
    return res.status(401).json({error:"Invalid token"})
  }
}
module.exports={
  authMiddleware
}