const express = require('express');
const helmet = require('helmet');
// const cors = require('cors');
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken')


 // logs information about each request to the console
function logger (req, res, next) {
    console.log(`Time: ${new Date().toISOString()}, request method: ${req.method} to ${req.url} from ${req.get('Origin')}`);
    next();
}

module.exports = server => {
//CORS
// server.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });
  server.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'https://labs12.herokuapp.com');
    next();
  });
  //CORS    
server.use(express.json());
server.use(helmet());
// server.use(cors());
server.use(logger);
// server.use(bodyParser)
};


