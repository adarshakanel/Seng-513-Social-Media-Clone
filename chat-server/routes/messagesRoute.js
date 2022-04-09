const {sendMsg, getMsg } = require("../controllers/messagesController");
const router = require("express").Router();
router.post("/sendMsg/", sendMsg);
router.post("/getMsg/", getMsg);

module.exports = router;