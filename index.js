require("dotenv").config();

const server = require("./api/server");

//random message generator add or delete them as you see fit, this is just a great way to visually see if the api was changed at all as it will display a new message each deployment.
var message = [
  "Who left the API running?",
  "How many programmers does it take to screw in a light bulb? None. Its a hardware problem.",
  "Welcome to the happiest server on this side of the sea!",
  "Hello World!",
  "Welcome Labs Team",
  "Team work makes the dream work!",
  "A programmer puts two glasses on his bedside table before going to sleep. A full one, in case he gets thirsty, and an empty one, in case he doesnt.",
  "In order to understand recursion you must first understand recursion.",
  "I hope you GET what you came for.",
  "awh CRUD, here we go again.",
  "***SEVER GREEN***",
  "What did the horse say to the car? What did the man say to the machine?",
  "Hic Rhodus!"
];
var m = message[Math.floor(Math.random() * message.length)];

const PORT = process.env.PORT || 4200;
server.listen(PORT, () =>
  console.log(`** ${m} **\n** UP and running on http://localhost:${PORT} **\n`)
);
