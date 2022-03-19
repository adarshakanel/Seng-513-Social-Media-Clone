const express = require("express");
const router = express.Router();
const User = require("../schema/User")

const cloudinary = require('cloudinary').v2;
const bcrypt = require('bcrypt');
const saltRounds = 10;

require('dotenv').config();
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.COULDINARY_SECRET
});

// "tree-736885__480.webp"
module.exports.uploadToColudinary = (fileAddress) => {
    try {
        cloudinary.uploader.upload(fileAddress,
            { folder: '513-social-media-clone' },
            function (error, result) { console.log(result) });
    } catch (err) {
        console.log(err)
    }
}

module.exports.postUser = async (req, res, next) => {
    const { email, username, password } = req.body;
    // bcrypt the password
    await bcrypt.hash(password, saltRounds, async function (err, hash) {
        const user = new User({ email, username, password: hash });
        await user.save(function (err, user) {
            if (err) { return next(err) }
            res.status(200).send(user)
        })
    });
};

module.exports.getUser = async (req, res, next) => {
    const { id } = req.params;
    const user = await User.findById(id)
        .populate({ path: "posts", populate: { path: "comments", path: "likedBy" } })

    if (user) res.status(200).send(user)
    else res.status(400).send("user not found")
};

module.exports.getUserIDFromEmail = async (req, res, next) => {
    const { email } = req.body;
    if (email) {
        const findUser = await User.find({ email })
        const user = await User.findById(findUser[0]._id)
        // .populate({ path: "posts", populate: { path: "comments", path: "likedBy" } })
        res.status(200).send(user)
    } else res.status(400).send("user not found")
    // the url sent back is that of the image
    // this.uploadToColudinary("./tree-736885__480.webp")
};

module.exports.userLogin = async (req, res, next) => {
    const { email, password } = req.body;
    if (email) {
        const user = await User.find({ email })
        if (user.length !== 0) {
            bcrypt.compare(password, user[0].password, function (err, result) {
                if (result) res.status(200).send(user[0].username)
            });
        } else {
            res.status(400).send("username or password incorrect")
        }
    }
};

module.exports.addPFP = async (req, res, next) => {
    const { id, pfp } = req.body;
    // console.log(id)
    if (id && pfp) {
        await User.findByIdAndUpdate({ "_id": id }, { pfp: pfp })
        res.status(200).send("pfp has been updated")
    } else {
        res.status(400).send("incorrect info")
    }
};

module.exports.followUser = async (req, res, next) => {
    const followId = req.params.id;
    const yourId = req.body.id;
    if (yourId && followId) {
        await User.findByIdAndUpdate(yourId, { $push: { following: followId } })
        await User.findByIdAndUpdate(followId, { $push: { follower: yourId } })
        res.status(200).send("user followed")
    } else {
        res.status(400).send("incorrect info")
    }
};

module.exports.unFollowUser = async (req, res, next) => {
    const followId = req.params.id;
    const yourId = req.body.id;
    if (yourId && followId) {
        await User.findByIdAndUpdate(yourId, { $pull: { following: followId } })
        await User.findByIdAndUpdate(followId, { $pull: { follower: yourId } })
        res.status(200).send("user unfollowed")
    } else {
        res.status(400).send("incorrect info")
    }
};