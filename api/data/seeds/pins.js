exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pins')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('pins').insert([
        {
          userId:"1",
          LATITUDE: "27.907620",
          LONGITUDE:" -82.449727",
          notes:"The Best Beach In Tampa, shh dont tell anyone.",
          home: true
        },
        {
          userId:"2",
          LATITUDE: "32.509456",
          LONGITUDE:"-96.852753",
          notes:"Hidden farm near Dallas",
          home: true

        },
        {
          userId:"3",
          LATITUDE: "40.658841",
          LONGITUDE:" -73.957091",
          notes:"Best flat house in NYC",
          home: false

        }

      ]);
    });
};
