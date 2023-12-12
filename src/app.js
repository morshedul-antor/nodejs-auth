const express = require("express");

const app = express();
app.use(express.json());

// error handler
const errorExceptions = require("./errors/exception");
app.use(errorExceptions);

// root api
app.get("/", (req, res) => {
  res.send({ message: "Nodejs Authentication!" });
});

// api router
const routerV1 = require("./routes/router");
app.use("/api/v1", routerV1);

module.exports = app;
