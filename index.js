const http = require("http");
const express = require("express");
const url = require("url");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Installed Express HomePage!");
});

app.listen(8080, () => {
  console.log("Server running at http://localhost:8080/");
});
