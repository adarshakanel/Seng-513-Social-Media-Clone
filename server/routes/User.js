const express = require("express");
const router = express.Router();
const UserController = require('../controller/User')

router.route("/")
    .post(async (req, res, next) => {
        UserController.postUser(req, res, next)
    })

router.route("/:id")
    .get(async (req, res, next) => {
        UserController.getUser(req, res, next)
    })

module.exports = router;