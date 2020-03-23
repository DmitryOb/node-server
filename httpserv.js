let express = require('express');

let app = express();

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/' + 'client.html');
});

let server = app.listen(80, function () {
	let host = server.address().address;
	let port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port)
});
