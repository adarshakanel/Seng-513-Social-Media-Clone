const express = require("express");
const Post = require("../schema/Post")
const User = require("../schema/User")
require('dotenv').config();

module.exports.makePost = async (req, res, next) => {
    const { image, description, date } = req.body
    console.log(image, date)
    if (image && date) {
        const { id } = req.params
        const post = new Post({ image, description, date })
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

module.exports.likePost = async (req, res, next) => {
    const { id } = req.params
    const postId = req.body.id
    if (id && postId) {
        await Post.findByIdAndUpdate({ "_id": postId }, { $addToSet: { likedBy: id } })
        res.status(200).send("post has been liked")
    } else {
        res.status(400).send("information incorrect")
    }
}

module.exports.unlikePost = async (req, res, next) => {
    const { id } = req.params
    const postId = req.body.id
    if (id && postId) {
        await Post.findByIdAndUpdate({ "_id": postId }, { $pull: { likedBy: id } })
        res.status(200).send("post has been unliked")
    } else {
        res.status(400).send("information incorrect")
    }
}