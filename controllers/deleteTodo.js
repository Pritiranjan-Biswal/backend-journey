const Todo = require("../models/Todo")

//definee route handler

exports.deleteTodo =  async(req, res) => {
    try {
      //to delete first find the id 
      const {id}= req.params;
        await Todo.findByIdAndDelete(id);
        res.json({
            success:true,
            message:`Todo deleted`,

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
