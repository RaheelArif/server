const mongoose = require("mongoose");
const Scheema = mongoose.Schema;

const student = new Scheema({
   name: {
      type:    String,
      required: [ true, "student name required"]

   },

   rollNumber : Number,
   city: String,
})

 const Students = mongoose.model('students', student )

 module.exports = Students;
