const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const log = `${Date.now()}: new request received. ${req.url} \n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("Home Page\n");
        break;
      case "/about":
        res.end("About Page\n");
        break;
      default:
        res.end("404 Not Found\n");
    }
  });
});

server.listen(8080, () => {
  console.log("Server running at http://localhost:8080/");
});
