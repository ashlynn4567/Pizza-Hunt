// imports
const router = require("express").Router();

// create the comment schema to regulate data rules
const CommentSchema = new Schema({
    writtenBy: {
        type: String
    },
    commentBody: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// create the comment model using the comment schema
const Comment = model("Comment", CommentSchema);

// exports
module.exports = Comment;