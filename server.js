const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000

app.get('/style.css', function(req, res) {
	res.sendFile(path.join(__dirname + '/style.css'));
});

app.get('/script.js', function(req, res) {
	res.sendFile(path.join(__dirname + '/script.js'));
});

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});


app.listen(PORT);