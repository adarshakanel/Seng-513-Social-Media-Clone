const {register, login, getUsers} = require("../controller/usersController");
const router = require("express").Router();
router.post("/register", register);
router.post("/login", login);
router.get("/allusers/:id", getUsers);

module.exports = router;