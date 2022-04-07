const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Post = require('./Post')

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    followers: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: "User"
        }],
        default: () => { return []; }
    },
    following: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: "User"
        }],
        default: () => { return []; }
    },
    posts: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: "Post"
        }],
        default: () => { return [] }
    },
    pfp: {
        type: String,
    }
})

module.exports = mongoose.model("User", UserSchema);