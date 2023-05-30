const express = require('express');

const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(3000);

/*
 ** //Other way to start a server
 **
 ** const hhtp = require('http');
 ** function responsePetition(request, response) {
 **    response.end('Hello World');
 **  }
 **  let server = hhtp.createServer(responsePetition);
 **  server.listen(3000);
 */
