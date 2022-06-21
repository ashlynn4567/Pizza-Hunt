// imports
const router = require("express").Router();
const { 
    addComment, 
    addReply,
    removeComment,
    removeReply
} = require("../../controllers/comment-controller");

// post comment at /api/comments/:pizzaId
router
    .route("/:pizzaId")
    .post(addComment);
    
// delete comment at /api/comments/:pizzaId/:commentId
router
    .route("/:pizzaId/:commentId")
    .put(addReply)
    .delete(removeComment);

// delete reply at /:pizzaId/:commentId/:replyId
router
    .route("/:pizzaId/:commentId/:replyId")
    .delete(removeReply);

// exports
module.exports = router;