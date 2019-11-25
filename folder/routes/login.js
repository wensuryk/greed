const express = require("express");
const path = require("path");


const router = express.Router();

router.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "../", "views", "delete.html"));
})

router.post("/login", (req,res) => {
    const formData = {
        login: req.body.login,
        password: req.body.password
    }
    SigIn(formData, function(result){
        res.send(result);
    })
})


module.exports = router;