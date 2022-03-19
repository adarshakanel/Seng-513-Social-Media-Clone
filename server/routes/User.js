const express = require("express");
const router = express.Router();
const UserController = require('../controller/User')

router.route("/")
    .post(async (req, res, next) => {
        UserController.postUser(req, res, next)
    })
    .put(async (req, res, next) => {
        UserController.addPFP(req, res, next)
    })

router.route("/login")
    .post(async (req, res, next) => {
        UserController.userLogin(req, res, next)
    })

router.route("/:id")
    .get(async (req, res, next) => {
        UserController.getUser(req, res, next)
    })
    .put(async (req, res, next) => {
        UserController.followUser(req, res, next)
    })
    .delete(async (req, res, next) => {
        UserController.unFollowUser(req, res, next)
    })

router.route("/findId")
    .post(async (req, res, next) => {
        UserController.getUserIDFromEmail(req, res, next)
    })

module.exports = router;