const express = require ("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const messageRoute = require("./routes/messagesRoute");
const app = express();
const socket = require("socket.io")
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use("/api/auth", userRoutes)
app.use("/api/messages", messageRoute)

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("DB Connection Successful")
}).catch((err) => {
    console.log(err)
});

const server = app.listen(process.env.PORT, ()=> {
    console.log("server has been started on PORT " + process.env.PORT)
})

const io = socket(server, {
    cors: {
      origin: "http://localhost:3000",
      credentials: true,
    },
  });

global.users = new Map();

io.on("connection", (socket) => {
    socket.on("setuser", (userId) => {
      users.set(userId, socket.id);
    });

    socket.on("send", (data) => {
        const toSocket = users.get(data.to);
        if (toSocket) {
          socket.to(toSocket).emit("receive", data.message);
        }
      });
    });