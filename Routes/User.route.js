const express = require("express");
const urouter = express.Router();
const User =require('../Models/User.model')


urouter.post('/', async(req,res)=>{
try {
    const user = new User(req.body);
    const result = await user.save();
    res.send(result)
} catch (error) {
    console.log(error)
}


})

module.exports=urouter;