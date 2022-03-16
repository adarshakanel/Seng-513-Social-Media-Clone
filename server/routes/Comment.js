const express = require("express");
const router = express.Router();
const CommentController = require('../controller/Comment')

router.route('/:id')
    .get(async (req, res, next) => {
        CommentController.getComment(req, res, next);
    })
    .post(async (req, res, next) => {
        CommentController.postComment(req, res, next);
    })
    .put(async (req, res, next) => {
        CommentController.updateComment(req, res, next);
    })
    .delete(async (req, res, next) => {
        CommentController.deleteComment(req, res, next);
    })


module.exports = router