var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');
var escape_html = require('escape-html');

var server = http.createServer();
var io = socketio(server);
var port = 3000;

fs.readFile('index.html', function (err, html) {
	if(err){
		throw err;
	}

	io.on('connection', function (socket) {
		socket.on('message', function (data) {
			console.log(data)
			console.log(socket.handshake);
			socket.broadcast.emit('message', data);
		});
		
	})

	server.on('request', function (req, res) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(html);
	})

	server.listen(port, function () {
		console.log('Server running on port ' + port);
	})

});