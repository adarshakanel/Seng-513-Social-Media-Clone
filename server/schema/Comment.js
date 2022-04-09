const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require('./User')
const CommentSchema = new Schema({
    description: {
        type: String
    },
    userName: {
        type: String,
        required: true
    },
    pfp: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Comment", CommentSchema);