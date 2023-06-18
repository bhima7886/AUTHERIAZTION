
const jwt=require("jsonwebtoken")
const { jwtSecret } = require("./config");


function generateToken(payload)
{
    return jwt.sign(payload,jwtSecret,{expiresIn:'7d'});
}


 
 function verifyToken(token)
 {
      return jwt.verify(token,jwtSecret);
 }

module.exports={
    generateToken,
    verifyToken
}