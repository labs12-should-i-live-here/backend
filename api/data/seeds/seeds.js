const bcrypt = require('bcryptjs');


const seededNames = ['Brian', 'Taylor', 'Daniel', 'Shreyas', 'Manjula', 'Laryna', 'Kim', 'Arthur', 'Hamza'];
const passwrd = bcrypt.hashSync('pass', 10);  // The users above can login with the password 'pass'

const arr = [];

for (let i = 0; i < seededNames.length ; i ++){
  arr.push( { id: i+1, username: seededNames[i], password: passwrd })
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert(arr);
    });
};
