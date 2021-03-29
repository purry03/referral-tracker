const express = require("express");
const app = express();

app.listen(80, function () {
  console.log("Server online on port 80");
});

app.get("/", function (req, res) {
  res.send("hello");
});
