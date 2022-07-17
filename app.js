const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Welcome bitches!");
});

app.listen(3000);
