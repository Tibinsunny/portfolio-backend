const app = require("./app");
const connection = require("../database/connection");
const port = process.env.PORT || 3000;

app.listen(port, "0.0.0.0", function () {
  console.log("Server Started on Port" + port);
});
