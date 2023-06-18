const mongoose=require("mongoose");

mongoose.connect("mongodb://127.0.0.1/Records",{
    useNewUrlParser:true,
    useUnifiedTopology:true,

}).then(()=>
{
    console.log("connection is success")
}).catch((err)=>
    {
        console.log("note connected");
    })