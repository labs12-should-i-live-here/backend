const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken')
const secrets = require('../data/extendedConfig');

 // logs information about each request to the console
function logger (req, res, next) {
    console.log(`Time: ${new Date().toISOString()}, request method: ${req.method} to ${req.url} from ${req.get('Origin')}`);
    next();
}


module.exports = (req, res, next) => {
const token = req.headers.authorization;

if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
    if (err) {
        res.status(401).json({ message: "You are not authorized because of an error!" });
    } else {
        req.decodedJwt = decodedToken;
        next();
    }
    });
} else {
    res.status(401).json({ message: "You are not authorized" });
}
};


module.exports = server => {
server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(logger);
// server.use(bodyParser)
};


