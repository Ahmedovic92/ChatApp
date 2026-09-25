const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(express.static("public"));

const users = {};

// helper function: update online users list
function updateUsers() {
    io.emit("users", Object.keys(users));
}

io.on("connection", (socket) => {

    // register user
    socket.on("register", (username) => {
        users[username] = socket.id;
        socket.username = username;

        updateUsers();
    });

    // private message system
    socket.on("private message", ({ to, message }) => {
        const from = socket.username;
        const targetSocketId = users[to];

        if (targetSocketId) {
            io.to(targetSocketId).emit("private message", {
                from,
                message
            });
        }
    });

    // handle disconnect
    socket.on("disconnect", () => {
        if (socket.username) {
            delete users[socket.username];
            updateUsers();
        }
    });

});

http.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});