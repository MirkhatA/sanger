const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("aziz dalbaeb");
});

app.listen(3000);
