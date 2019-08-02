const express = require("express");
const Students = require("../models/student")
const router = express.Router();

router.get("/web" , (req, res, next)=>{
    res.send({
        name: "adil"
    })
})


router.post("/web" , (req, res, next)=>{
   Students.create(req.body).then( student =>{
       res.send(student)
   }).catch(next)

})


router.put("/web/:id" , (req, res, next)=>{
    res.send("put request")
})


router.delete("/web/:id" , (req, res, next)=>{
    res.send(" delete Request")
})





module.exports = router;