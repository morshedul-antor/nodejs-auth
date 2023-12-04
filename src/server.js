const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");
dotenv.config();

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("DB connection successfull..."))
  .catch((err) => console.log(err));

app.listen(process.env.PORT || 5050, () => {
  console.log("Server listing on port 5050...");
});
