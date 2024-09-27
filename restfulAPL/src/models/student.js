const mongoose = require("mongoose"); // to access with mongoose
const validator = require("validator"); // to access validator

// to create mongoose-schema  with build in validation
const studentschema = new mongoose.Schema({
  
  name: {
    // build in validation level-21 
    type:String,
    required : true,
    unique:true,
    uppercase : true,
    minlength:3, 
    maxlength:30,
    trim:true
  },
  phone: {
    type:Number,
    required : true,
    min:10, 
    unique:true 
  },
 // in email npm validation used that is !validator.isEmail(value)...... 
  email:{
   type: String,
   required : true,
    unique: [true, " email id  is allready used"],

    validate(value){
      if(!validator.isEmail(value))
        {
          throw new Error("Email is invalid ")
        }
    } 
  },
  address: {
    type:String,
    required : true,
    min:4, 
    max:100 
  }

});

// mogoose model is awrapper is an mongoose schema ita provide a interface to tha databaese for creating, updatings,deletings,readings....
// ITS HAS TWO AARGUMENT FIRST IS COLLECTION NAMES WHICH IS ALWAYS SINGULAR FORM
// TWO AARGUMENT SECONG  IS  MONDOOSE SECHMA...
// first letter of collection name should be capital
const Student = new mongoose.model("Student",studentschema ); // create collection
 
module.exports = Student;
