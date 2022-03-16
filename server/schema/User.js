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
        type: [String],
        default: () => { return null; }
    },
    following: {
        type: [String],
        default: () => { return null; }
    },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: "Post"
    }],
    pfp: {
        type: String,
    }
})

module.exports = mongoose.model("User", UserSchema);