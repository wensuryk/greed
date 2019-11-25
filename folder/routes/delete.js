const express = require("express");
const path = require("path");
const {DeleteUser} =  require("../model/dbManager");


const router = express.Router();

router.get("/delete", (req, res) => {
    res.sendFile(path.join(__dirname, "../", "views", "delete.html"));
})

router.post("/delete", (req,res) => {
    console.log("Delete");
    const formData = {
        login: req.body.login
    }
    DeleteUser(formData, function(result){
        res.send(result);
    })
})


module.exports = router;