var express = require('express');

var app = express();

app.use(express.static('./'));

var port = 1234;

app.listen(port, function(){
	console.log('Listening to port', port, '!');
});
