// imports
const { Schema, model, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

// create a reply schema 
const ReplySchema = new Schema(
    {
        replyId: {
            type: Schema.Types.ObjectId, 
            default: () => new Types.ObjectId()
        },
        replyBody: {
            type: String,
            required: true
        },
        writtenBy: {
            type: String, 
            required: true,
            trim: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: ((createdAtVal) => dateFormat(createdAtVal))
        }
    }, 
    {
        toJSON: {
            getters: true
        }
    }
);

// create the comment schema to regulate data rules
const CommentSchema = new Schema(
    {
        writtenBy: {
            type: String, 
            required: true
        },
        commentBody: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: ((createdAtVal) => dateFormat(createdAtVal))
        }, 
        // use ReplySchema to validate data for a reply
        replies: [ReplySchema]    
    }, 
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// get total count of comments and replies on retrieval as a virtual
CommentSchema.virtual("replyCount").get(function() {
    return this.replies.length;
});

// create the comment model using the comment schema
const Comment = model("Comment", CommentSchema);

// exports
module.exports = Comment;