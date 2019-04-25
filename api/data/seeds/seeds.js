
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'josh', password: 'pass' },
        {id: 2, username: 'joshua', password: 'pass' },
        {id: 3, username: 'alejandro', password: 'pass' },
        {id: 4, username: 'krisli', password: 'pass' },
        {id: 5, username: 'rudy', password: 'pass' },
      ]);
    });
};
