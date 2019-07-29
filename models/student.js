const mongoose = require("mongoose");
const Scheema = mongoose.scheema;

const student = new Scheema({
   name: String,
   rollNumber : Number,
   city: String,
})

 const Students = mongoose.model('students', student )

 module.exports = Students;
