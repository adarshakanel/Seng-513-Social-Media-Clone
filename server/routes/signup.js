const express = require("express");
const router = express.Router();
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
const User = require("../schema/User")
// This will help us connect to the database
// const dbo = require("../conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

module.exports.postUser = async (req, res, next) => {
    const { email, username, password } = req.body;
    const user = new User({ email, username, password });
    await user.save(function (err, user) {
        if (err) { return next(err) }
        res.status(200).send(user)
    })
};

router.post("/create", async (req, res, next) => {
    this.postUser(req, res, next)
})

module.exports = router;