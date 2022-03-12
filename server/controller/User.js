const express = require("express");
const router = express.Router();
const User = require("../schema/User")
const cloudinary = require('cloudinary').v2;
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

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

module.exports.postUser = async (req, res, next) => {
    const { email, username, password } = req.body;
    const user = new User({ email, username, password });
    await user.save(function (err, user) {
        if (err) { return next(err) }
        res.status(200).send(user)
    })
};

module.exports.getUser = async (req, res, next) => {
    const { id } = req.params;
    console.log(id)
    const user = await User.findById(id)
    if (user) res.status(200).send(user)
    else res.status(400).send("user not found")
    // the url sent back is that of the image
    // this.uploadToColudinary("./tree-736885__480.webp")
};