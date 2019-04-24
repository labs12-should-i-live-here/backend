const express = require('express');
const middleware = require('./middleware/serverMiddleware')

const server = express();

middleware(server);

//function that displays current date
const utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
//simple get that we can remove later
server.get('/', (req, res) => {
res.status(200).send(`Today is ${utc}`);
});

module.exports = server;