const express = require("express"); // to access express

require("./database/connection"); //  to connect express with mangosse-databases here student-api is databases name here......
const Student = require("./models/student");




const app = express();  // to create expresss
const port = process.env.port || 9000;


app.use(express.json()); //express.json is used to comvert automaticlly incoming request object into json object...

// here we used post for create at the place of get for rest full api kr liya

// to create a new student

app.post("/students",(req,res)=>{  

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

app.get("/students",async(req,res)=>{  // asycn for asycn function
  try {  
   // to read and query  document we used find function..
   
   const studentsData=  await Student.find(); 
 
   
  
   res.send(studentsData); }
     
   catch(err){  
   res.status(400).send(err);
  }
 
  
 });

 // get the indivisual student data using id.. level-28

 app.get("/students/:id",async(req,res)=>{  // asycn for asycn function
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
 
app.delete("/students/:id",async(req,res)=>{  // asycn for asycn function
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
 
app.patch("/students/:id",async(req,res)=>{  // asycn for asycn function
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
 
app.listen(port, ()=>{
  console.log(`connection is set up at port number ${port}`);
});
