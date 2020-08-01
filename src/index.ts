import { Socket } from "dgram";

const express = require('express');
const app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

http.listen(3000, () => {
	console.log('listening on *:3000');
});

io.on('connection', (socket: Socket) => {
	console.log("user connected");
});

