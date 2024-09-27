const mongoose = require("mongoose"); // to access with mongoose 
mongoose.connect("mongodb://localhost:27017/student-api")  /// to connect mangoose with databases here student-api is databases name here......
// to response promise
.then(()=>{ 
  console.log("connection is successfull");
})

// for catch erroe
.catch((err)=>{ 
  console.log(err);
});