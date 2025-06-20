const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from server!');
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from the DevOps CI/CD Pipeline!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
