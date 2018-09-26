const http = require('http');

var port = process.env.PORT || 1337;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port);
console.log("Server running at http://localhost:%d", port);
