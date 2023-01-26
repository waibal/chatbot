const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cookie: true //add cookies
}); //test cookie connection with 'curl "https://mydomain.com/socket.io/?EIO=4&transport=polling" -v'

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected'); //listen to connection
    socket.on('disconnect', () => {
        console.log('user disconnected'); //speical disconnect event
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
}); //send message


