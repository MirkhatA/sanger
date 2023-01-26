const express = require("express");
const morgan = require("morgan");

const app = express();

//routes
const { getItems } = require("./routes/item");

const myMiddleware = (req, res, next) => {
  console.log("test");
  next();
};

// middleware
app.use(morgan("dev"));
app.use(myMiddleware);

app.get("/getItems", getItems);

const port = 4000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});