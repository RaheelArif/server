const express = require("express");
const server = express();
const bodyParser = require("body-parser")
 


server.use(bodyParser.json());
server.use("/student", require("./routes/router"))






server.listen(8000 , ()=> {
   console.log("server started")
})