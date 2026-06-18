const express=require("express");

const router=express.Router();

//import controller

const {createTodo}= require("../controllers/createTodo");
const dbConnect = require("../config/database");
//define api route
router.post("/createTodo", createTodo);

module.exports=router;