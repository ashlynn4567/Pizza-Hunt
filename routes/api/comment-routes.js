// imports
const router = require("express").Router();
const { addComment, removeComment } = require("../../controllers/comment-controller");

// post comment at /api/comments/:pizzaId
router
    .route("/:pizzaId")
    .post(addComment);
    
// delete comment at /api/comments/:pizzaId/:commentId
router
    .route("/:pizzaId/:commentId")    
    .delete(removeComment);

// exports
module.exports = router;