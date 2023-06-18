const Student=require("../models/Student");

async function addStudent(name,collegeName,city)
{
    try{
    const student=new Student({name:name,collegeName:collegeName,city:city});
    await student.save();
    return student;
   }
   catch(err)
   {
    console.log(err);
   }
}

async function getStudent()
{
    try{
        const student=await Student.find();
        return student;
    }
    catch(err)
    {
        console.log(err);
    }
}

module.exports={
    addStudent,
    getStudent
}