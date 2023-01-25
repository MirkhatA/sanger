const express = require("express");
const app = express();

//routes
const { getItems } = require("./routes/item");

app.get("/", getItems);

const port = 4000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
