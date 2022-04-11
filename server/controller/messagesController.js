const messageModel = require("../models/messageModel");

module.exports.sendMsg = async (req, res, next) => {
    try {
        const { from, to, message } = req.body;
        const data = await messageModel.create({
            message: {text: message},
            users: [from, to],
            sender: from,
        });
        if (data) return res.json({msg: "Your message was sent successfully"});
        return res.json({msg: "Your message failed to send"});
      } catch (ex) {
        next(ex);
      }
}

module.exports.getMsg = async (req, res, next) => {
    try {
        const { from, to } = req.body;
        const messages = await messageModel.find({
            users:{
                $all:  [from, to],
            },
        }).sort({updatedAt:1});
        const projectMessages = messages.map((msg)=>{
            return {
                sentByMe: msg.sender.toString() === from,
                message: msg.message.text,
            };
        });
        res.json(projectMessages);
        
      } catch (ex) {
        next(ex);
      }
}