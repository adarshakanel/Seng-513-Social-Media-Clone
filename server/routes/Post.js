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
    .put(async (req, res, next) => {
        PostController.likePost(req, res, next)
    })

router.route('/unlike/:id')
    .put(async (req, res, next) => {
        PostController.unlikePost(req, res, next)
    })
module.exports = router;