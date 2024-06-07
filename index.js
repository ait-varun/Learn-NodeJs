const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end(); // ignore favicon requests
  const log = `${Date.now()}: new request received. ${req.url} \n`;
  const newUrl = url.parse(req.url, true);
  console.log("", newUrl);
  fs.appendFile("log.txt", log, (err, data) => {
    switch (newUrl.pathname) {
      case "/":
        if (req.method === "GET") res.end("Home Page\n");
        break;
      case "/about/":
        const userName = newUrl.query.name;
        res.end(`hello ${userName}\n`);
        break;
      case "/signup":
        if (req.method === "GET") {
          res.end("Signup Page\n");
        } else if (req.method === "POST") {
          // DB insert
          res.end("Signup successful\n");
        }
        break;
      default:
        res.end("404 Not Found\n");
    }
  });
});

server.listen(8080, () => {
  console.log("Server running at http://localhost:8080/");
});
