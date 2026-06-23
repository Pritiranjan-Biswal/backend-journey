//import model
const Post = require("../models/postModel");

const Comment = require("../models/commentModel");


//business logic
exports.createComment = async (req, res) => {
    try{
        //fetch data from req body 
        const {post, user, body} = req.body;

        //create a comment onject
        const comment = new Comment ({
            post,user,body
        });
        //save the new comment into the database 
        const savedComment = await comment.save();

        //find the post using ID and add the new comment into it
        const updatedPost =  await Post.findByIdAndUpdate(post, {$push : {comments:savedComment}}, {new:true})
                                .populate("comments") //populates the comments array with the comment documents
                                .exec();


        res.json({
            post:updatedPost,
        })
    }
   catch(error) {
    console.log(error);

    return res.status(500).json({
        error: "While creating the comment",
        message: error.message
    });
}
}