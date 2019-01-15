const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000

app.use(express.static(__dirname + '/public'));
//app.get('/*', function(req, res) {
//	res.sendFile(path.join(__dirname + '/index.html'));
//});

app.get('*', function(req, res){
  res.sendfile(__dirname + '/public/index.html');
});

app.listen(PORT);