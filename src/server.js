const mongoose = require("mongoose");
const app = require("./app");

mongoose
  .connect("mongodb://localhost:27017/auth")
  .then(() => console.log("DB connection successfull..."))
  .catch((err) => console.log(err));

app.listen(process.env.PORT || 5050, () => {
  console.log("Server listing on port 5050...");
});
