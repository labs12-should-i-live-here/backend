require('dotenv').config();

const server = require('./api/server');

//random message generator add or delete them as you see fit, this is just a great way to visually see if the api was changed at all as it will display a new message each deployment.
var message = ['Welcome to the happiest server on this side of the sea!','Hello World!','Welcome Labs Team','Team work makes the dream work!'];
var m = message[Math.floor(Math.random()*message.length)];

const PORT = process.env.PORT || 4200;
server.listen(PORT, () =>
  console.log(`** ${m} **\n** UP and running on http://localhost:${PORT} **\n`)
);