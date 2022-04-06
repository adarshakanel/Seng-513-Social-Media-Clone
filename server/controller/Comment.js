const express = require("express");
const Comment = require("../schema/Comment")
const Post = require("../schema/Post")
const User = require("../schema/User")

module.exports.postComment = async (req, res, next) => {
    const { description, date } = req.body
    const postId = req.params.id
    // console.log(description, id, date)
    if (description && date) {
        const user = await User.find({ posts: postId })
        const id = user._id
        const comment = await new Comment({ description, id, date })
        await comment.save(async function (err, user) {
            if (err) { return next(err) }
            else {
                await Post.findByIdAndUpdate({ "_id": postId }, { $addToSet: { comments: comment.id } })
                res.status(200).send("comment has been made")
            }
        })
    } else {
        res.status(400).send("incorrect information")
    }
}

module.exports.getComment = async (req, res, next) => {
    const { id } = req.params
    // const postId = req.params.id
    if (id) {
        const post = await Post.findById(id)
            .populate("comments")
        console.log(post)
        if (post) res.status(200).send(post.comments)
        else res.status(400).send("comment not found")
    } else {
        res.status(400).send("incorrect information")
    }
}

module.exports.updateComment = async (req, res, next) => {
    // params is the comment id for this one
    const commentId = req.params.id;
    const { description, date } = req.body
    if (commentId && description && date) {
        await Comment.findByIdAndUpdate(commentId, { description, date })
        res.send("comment has been updated")
    } else {
        res.status(400).send("incorrect information")
    }
}

module.exports.deleteComment = async (req, res, next) => {
    const postId = req.params.id;
    const { id } = req.body
    if (postId && id) {
        await Comment.findByIdAndDelete(id)
        await Post.findByIdAndUpdate(postId, { $pull: { comments: id } })
        res.send("comment has been deleted")
    } else {
        res.status(400).send("incorrect information")
    }
}