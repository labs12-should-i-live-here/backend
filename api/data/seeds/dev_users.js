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
          userid:"1",
          premium_member:true,
          numberofsavedlocations: "1"
        },
        {
          userid:"2",
          premium_member:true,
          numberofsavedlocations: "1"
        },
        {
          userid:"3",
          premium_member:true,
          numberofsavedlocations: "1"
        }

      ]);
    });
};
