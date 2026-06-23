const mongoose = require("mongoose")

//route handler

const likeSchema= new mongoose.Schema({
     post:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Post" //this is a reference to post id 
        },
        user:{
            type:String,
            require:true
        }
})

module.exports = mongoose.model("Like", likeSchema);