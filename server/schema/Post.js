const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Comment = require("./Comment")
const PostSchema = new Schema({
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    comments: {
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }
})

module.exports = mongoose.model("Post", PostSchema);