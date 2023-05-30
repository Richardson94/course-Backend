const hhtp = require('http');

function responsePetition(request, response) {
  response.end('Hello World');
}

let server = hhtp.createServer(responsePetition);

server.listen(3000);
