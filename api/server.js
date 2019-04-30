const express = require("express");
const middleware = require("./middleware/serverMiddleware");


//Stripe Special Key
const dotenv = require("dotenv");
dotenv.config()

//Routes
const registration = require('./routes/register.js');
const login = require('./routes/login.js');
const payment = require('./routes/payment.js'); //Stripe

<<<<<<< HEAD
=======

>>>>>>> 62f7f28ce49f83939b9cb55da1d8458202aecac6
const server = express();
middleware(server);

server.use("/login", login, notFound);
server.use("/register", registration, notFound); // notFound() should be the last middleware used
server.use('/payment', payment, notFound); //Stripe


//function that displays current date
const utc = new Date()
  .toJSON()
  .slice(0, 10)
  .replace(/-/g, "/");
server.get("/", (req, res) => {
  res.status(200).send(`Today is ${utc}`);
});

// returns a 404 if path not found.
function notFound(req, res) {
  res.status(404).send("URL not found.");
}
module.exports = server;
