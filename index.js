const express = require("express");
const server = express();
const bodyParser = require("body-parser")
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true}).then(console.log("database connected"));
server.use(bodyParser.json());
server.use("/student", require("./routes/router"))






server.listen(8000 , ()=> {
   console.log("server started")
})