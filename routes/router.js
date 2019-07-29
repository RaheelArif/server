const express = require("express");

const router = express.Router();

router.get("/web" , (req, res)=>{
    res.send({
        name: "adil"
    })
})


router.post("/web" , (req, res)=>{
    console.log(req.body)
    res.send({
        name: "req.body.name",
        age: req.body.age
    })
})


router.put("/web/:id" , (req, res)=>{
    res.send("put request")
})


router.delete("/web/:id" , (req, res)=>{
    res.send(" delete Request")
})





module.exports = router;