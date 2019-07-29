const mongoose = require("mongoose");
const Scheema = mongoose.Schema;

const student = new Scheema({
   name: String,
   rollNumber : Number,
   city: String,
})

 const Students = mongoose.model('students', student )

 module.exports = Students;
