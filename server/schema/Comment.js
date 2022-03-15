const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require('./User')
const CommentSchema = new Schema({
    description: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    date: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Comment", CommentSchema);