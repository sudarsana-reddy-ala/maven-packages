const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const name = req.query.name;
  res.send(`<h1>Hello, ${name}</h1>`);
});

app.get("/hello", (req, res) => {
    // Do a resource-intensive operation
    while (true) {}
  });

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});