const express = require("express");
const Students = require("../models/student")
const router = express.Router();

router.get("/web" , (req, res)=>{
    res.send({
        name: "adil"
    })
})


router.post("/web" , (req, res)=>{
   Students.create(req.body).then( student =>{
       res.send(student)
   })

})


router.put("/web/:id" , (req, res)=>{
    res.send("put request")
})


router.delete("/web/:id" , (req, res)=>{
    res.send(" delete Request")
})





module.exports = router;