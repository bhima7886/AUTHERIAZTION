const bcrypt=require("bcrypt");
const User=require("../models/User");

async function signup(username,password)
{
    const hashedPassword=await bcrypt.hash(password,10);
    const user=new User({username,password:hashedPassword});
    await user.save();
    console.log(user);
}

async function login(username,password)
{
    const user=await User.findOne({username});
    if(!user)
    {
        throw new Error("Invalid username or password")
    }
    const isValidPassword=await bcrypt.compare(password,user.password);
    if(!isValidPassword)
    {
        throw new Error("Invalid username or password");
    }
    
    return user;
}
module.exports={
    signup,
    login
}