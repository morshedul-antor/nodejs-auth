const express = require("express");

const app = express();
app.use(express.json());

// root api
app.get("/", (req, res) => {
  res.send({ message: "Nodejs Server!" });
});

module.exports = app;
