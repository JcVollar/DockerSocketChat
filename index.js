const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// This delivers the main client chat frontend.
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// The main socket integration
io.on('connection', (socket) => {
    console.log('a user connected');

    // This is lisening to for a incomming message
    socket.on('chat_message', (msg) => {
        console.log(socket.id + msg);

        io.emit('chat_message', msg); // Sends the message back to everyone that is connected
        //socket.broadcast.emit('chat_message', msg); // Sends the message back to everyone, exept the client that sendt it
    });


    // This fires when a user is disconnected from the socket
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });

});

// Basic http service lisening to port 3000. If you change this, remember to change the docker port as well.
server.listen(3000, () => {
    console.log('listening on *:3000');
}); 
