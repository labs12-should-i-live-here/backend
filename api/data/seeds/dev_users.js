const bcrypt = require('bcryptjs')

const hash = bcrypt.hashSync("password", 8);

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          email: 'GeoRangerfrontend@gmail.com',
          username: 'admin',
          password: hash,
        },
        {
          email: 'email@aol.com',
          username: 'first',
          password: hash,
        },
        {
          email: 'wash@nyc.edu',
          username: 'washington',
          password: hash,
        }

      ]);
    });
};
