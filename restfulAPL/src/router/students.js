const express =require("express");


const router = new express.Router(); // to create a new router


const Student = require("../models/students");

router.post("/students",(req,res)=>{  

  // to create document or insert document
  console.log(req.body);
  const user = new Student(req.body); // here we connect postman body data in studentt colection 
 // now all req.body data is came in user object..

  // user.save()  is used to store body data from postman into mongodb campass but it rturn promise so its take wait so we used .then function that wait promise  untill it complete and ctach function is used to catch the error.......
  
  
  
  
  user.save() 
 .then(()=>{
  
  res.status(201).send(user);

 })
 .catch((err)=>{
  res.status(400).send(err);
 })

});








// read the  data from registRATION STUDENT COLLECTION from postman api.. level-28----
//for this we used GET ..


router.get("/students",async(req,res)=>{  // asycn for asycn function
  try {  
   // to read and query  document we used find function..
   
   const studentsData=  await Student.find(); 
 
   
  
   res.send(studentsData); }
     
   catch(err){  
   res.status(400).send(err);
  }
 
  
 });

 // get the indivisual student data using id.. level-28

 
router.get("/students/:id",async(req,res)=>{  // asycn for asycn function
  try {  
   // to read and query individuals document by id
   
   const _id = req.params.id;
   
   const studentData=  await Student.findById(_id); 
   
   console.log(studentData);


   if(!studentData){
    return res.status(404).send();
   } else{  
  
   res.send(studentData); }}
     
   catch(err){  
   res.status(500).send(err);
  }
 
  
 });

 // to delete request from restAPL level-29.......
 

 router.delete("/students/:id",async(req,res)=>{  // asycn for asycn function
  try {  
   
   
   const _id = req.params.id; // to find id from pastman 
   const deleteData=  await Student.findByIdDelete(_id); 

   
   if(!_id){
    return res.status(400).send();
   } else{  
  
   res.send(deleteData); }}
     
  
   
     
   catch(err){  
   res.status(500).send(err);
  }
 
  
 });



 
 // to delete request from restAPL level-30.......
 
router.patch("/students/:id",async(req,res)=>{  // asycn for asycn function
  try {  
   
   
   const _id = req.params.id; // to find id from pastman 
   const patchData=  await Student.findByIdUpdate(_id,req.body , {
    new:true
   }); 
  
   res.send(patchData); }
       
   catch(err){  
   res.status(404).send(err);
  }
 
  
 });
router.get("/rehan",(req,res)=>{  //we need to define  the router
  res.send("hello whatapp guys");

});


module.exports = router;