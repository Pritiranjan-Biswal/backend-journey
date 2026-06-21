//import  model
const Todo = require("../models/Todo")

//definee route handler

exports.getTodo =  async(req, res) => {
    try {
       //fetch all todo items from database
       const todos= await Todo.find({});
       //response 
       res.status(200) 
       .json ({
            success:true,
            data:todos,
            message:"Entire todo data is fetched."
       })
        
    }
    catch(err) {
        console.log(err);
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"Server error"
        })
        
    }
}


exports.getTodoById=async(req, res) => {
    try {
       //extract todo item based on id
       const id = req.params.id;
       const todo = await Todo.findById({_id:id})

       //data for given id not found
       if(!todo) {
        return res.status(400).json({
            success:false,
            message:"No data Found with given Id"
        })
       }
       res.status(200).json({
        success:true,
        data:todo,
        message:`Todo ${id} data is successfully fetched`
       })
        
    }
    catch(err) {
        console.log(err);
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"Server error"
        })
        
        
    }

}

