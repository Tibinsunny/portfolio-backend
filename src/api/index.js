const app = require("../app");

module.exports = (req, res) => {
  app(req, res); // Pass the request and response to your Express app
};
