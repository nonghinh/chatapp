var express = require('express');
var app = express();
var io = require('socket.io');
var server = require('http').createServer(app);
var port = process.env.PORT || 3000;
io.listen(server);
server.listen(port);
console.log('Server runing');

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});