const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Comment = require("./Comment")
const User = require('./User')
const PostSchema = new Schema({
    image: [{
        type: String,
        required: true,
    }],
    description: String,
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }],
    likedBy: [{
        type: Schema.Types.ObjectId,
        ref: "User",
        unique: true,
        dropDups: true
    }],
    date: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Post", PostSchema);