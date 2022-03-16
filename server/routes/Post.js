const express = require("express");
const router = express.Router();
const PostController = require('../controller/Post')

router.route('/:id')
    .post(async (req, res, next) => {
        PostController.makePost(req, res, next)
    })
    .get(async (req, res, next) => {
        PostController.getPosts(req, res, next)
    })
    .delete(async (req, res, next) => {
        PostController.deletePosts(req, res, next)
    })

module.exports = router;