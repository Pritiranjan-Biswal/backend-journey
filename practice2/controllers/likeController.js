const Like = require("../models/likeModel");
const Post = require("../models/postModel");

exports.likePost = async (req, res) => {
    try {
        // fetch data
        const { post, user } = req.body;

        // create like object
        const like = new Like({
            post,
            user
        });

        // save like
        const savedLike = await like.save();

        // update post by pushing like id
        const updatedPost = await Post.findByIdAndUpdate(
            post,
            {
                $push: {
                    likes: savedLike._id
                }
            },
            { new: true }
        )
        .populate("likes")
        .exec();

        return res.status(200).json({
            success: true,
            post: updatedPost
        });

    } catch (error) {
        console.log(error);

        return res.status(400).json({
            success: false,
            error: "Error while creating the like",
            message: error.message
        });
    }
};