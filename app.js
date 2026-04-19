const http = require('http');

const PORT = process.env.PORT || 3000;
const VERSION = process.env.APP_VERSION || "v1";

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200);
    return res.end("OK");
  }

  if (req.url === '/version') {
    res.writeHead(200);
    return res.end(VERSION);
  }

  res.writeHead(200);
  res.end(`Hello from AKS vivek & prajakta ${VERSION}`);
});

server.listen(PORT);
