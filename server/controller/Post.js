const express = require("express");
const Post = require("../schema/Post")
const User = require("../schema/User")
require('dotenv').config();

module.exports.makePost = async (req, res, next) => {
    const { image, comments } = req.body
    if (image) {
        const { id } = req.params
        const post = new Post({ image, comments })
        await post.save(async function (err, user) {
            if (err) { return next(err) }
            else {
                await User.findByIdAndUpdate({ "_id": id }, { $push: { posts: post.id } })
                res.status(200).send("post has been made")
            }
        })
    } else {
        res.status(400).send("information incorrect")
    }
}

module.exports.getPosts = async (req, res, next) => {
    const { id } = req.params
    if (id) {
        const userPosts = await User.findById(id)
            .populate("posts")
        // console.log(userPosts)
        if (userPosts) {
            res.status(200).send(userPosts.posts)
        } else {
            res.status(400).send("can not find posts")
        }
    } else {
        res.status(400).send("information incorrect")
    }
}

module.exports.deletePosts = async (req, res, next) => {
    const { id } = req.params
    const postId = req.body.id
    if (id && postId) {
        await Post.findByIdAndDelete(postId)
        await User.findByIdAndUpdate({ "_id": id }, { $pull: { posts: postId } })
        res.status(200).send("post has been delete")
    } else {
        res.status(400).send("information incorrect")
    }
}