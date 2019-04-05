const path = require('path');
const http = require('http');

const socketIO = require('socket.io');
const express = require('express');

var port = process.env.PORT || 5000;
var publicPath = path.join(__dirname, '../public');
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath))
app.use(express.json());

io.on("connection", (socket) => {
    console.log("new users connected with SocketId: ");
    socket.on("disconnect", () => {
        console.log("User is disconnected");
    })
})



app.get('/temp', (req, res) => {
    res.send("sample text")
})



server.listen(port, () => {
    console.log(`Connected to Port ${port}`);
})

module.exports = {app}