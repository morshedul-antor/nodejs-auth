const express = require("express");

const app = express();
app.use(express.json());

// root api
app.get("/", (req, res) => {
  res.send({ message: "Nodejs Server!" });
});

// router
const routerV1 = require("./routes/router");
app.use("/api/v1", routerV1);

module.exports = app;
