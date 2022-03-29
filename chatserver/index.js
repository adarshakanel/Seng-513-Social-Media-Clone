const express = require("expresS");
const app = express();
const http = require("http");
const cors = require("cors");
app.use(cors());
const {Server} = require ("socket.io");
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
})


io.on("connection", (socket) => {
    console.log("the user " + socket.id + " has connected")

    socket.on("join", (data) =>{
        socket.join(data);
        console.log("user with ID: " + socket.id + " joined room " + data)
    })

    socket.on("message", (data) =>{
        socket.to(data.room).emit("receive_message", data)
    })

    socket.on("disconnect", () => {
        console.log("the user " + socket.id + " has disconnected")
    })
})

server.listen(3001, () =>{
    console.log("server running");
});