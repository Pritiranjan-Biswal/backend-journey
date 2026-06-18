//import  model
const Todo = require("../models/Todo")

//definee route handler

exports.createTodo =  async(req, res) => {
    try {
        //extract title, des from body
        const {title, description} = req.body;
        //create a new todo obj and insert into db

        const response = await Todo.create({title, description}); 

        // send a response json 

        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Entry created successfully."
            }
        )
    }
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal servser error",
            message:err.message
        })
    }
}