const studentService=require("../services/Student.service");

async function addStudent(req,res)
{
    try{
        const {name,collegeName,city}=req.body;
          const student=await studentService.addStudent(name,collegeName,city);
          res.status(201).json({student});
          console.log(req.body);
    }
    catch(err)
    {
        res.status(401).json({err:err.message});
    }

}

async function getStudent(req,res)
{
    try{
        const student=await studentService.getStudent();
        res.status(201).json(student);
        console.log(student);
        console.log(req.body);
    }
    catch(err)
    {
        res.status(401).json({err:err.message});
    }
}

module.exports={
    addStudent,
    getStudent
}