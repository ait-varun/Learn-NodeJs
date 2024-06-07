const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello World\n");
});

server.listen(8080, () => {
  console.log("Server running at http://localhost:8080/");
});
