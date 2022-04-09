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
    comments: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: "Comment"
        }],
        default: () => { return []; }
    },
    likedBy: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: "User",
            dropDups: true
        }],
        default: () => { return []; },
        unique: false
    },
    date: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Post", PostSchema);