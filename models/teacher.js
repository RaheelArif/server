const mongoose = require("mongoose");
const Scheema = mongoose.scheema;

const teacher = new Scheema({
   name: String,
   sallery: Number,
   city: String,
   rank: Number,
})

 const Teachers = mongoose.model('teachers', teacher )

 module.exports = Teachers;
