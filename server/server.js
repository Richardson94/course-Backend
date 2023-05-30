const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/welcomer', function (req, res) {
  res.send(`Hello ${req.query.name} from Express`);
});

app.post('/welcomer2', function (req, res) {
  res.send(`Hello ${req.body.name} from Express`);
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
