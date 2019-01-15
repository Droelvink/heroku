const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
	res.sendFile(path.join(__dirname + '/style.css'));
	res.sendFile(path.join(__dirname + '/script.js'));
});

app.listen(PORT);