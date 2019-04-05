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
    var email;
    console.log("new users connected with SocketId: ");


    socket.on("disconnect", () => {
        console.log("User is disconnected");
    })

    socket.on('createEmail', function(data){
        console.log("createEmail: ",data);
    })

    socket.emit('newEmail', email);

    socket.emit('newMessage', {from:'lalit yadav', text:'hello everyone', createdAt:new Date().toISOString()});

    socket.on('addMessage', function(message){
        console.log("NEW MESSAGE: ",message)
    })



})



app.get('/temp', (req, res) => {
    res.send("sample text")
})



server.listen(port, () => {
    console.log(`Connected to Port ${port}`);
})

module.exports = {app}