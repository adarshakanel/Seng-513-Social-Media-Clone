const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose")
const userRoutes = require("./routes/User")
const postRoutes = require('./routes/Post')
const commentRoutes = require('./routes/Comment')
const userRoutess = require("./routes/userRoutes");
const messageRoute = require("./routes/messagesRoute");
const socket = require("socket.io")


require("dotenv").config({ path: "./config.env" });

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/user", userRoutes);
app.use("/post", postRoutes);
app.use("/comment", commentRoutes);
app.use("/api/auth", userRoutess)
app.use("/api/messages", messageRoute)

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
// get driver connection
const dbUrl = process.env.URL;

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Mongo Connection open!")
}).catch(err => {
    console.log("Mongo Error spotted!");
    console.log(err);
});

const server = app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
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