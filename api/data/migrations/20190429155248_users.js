exports.up = function(knex) {
  return knex.schema.createTable("users", users => {
    users.increments();
    users
      .string("userid", 128)
      .notNullable()
      .unique();
    users.boolean("premium_member").defaultTo(false);
    users.integer("numberofsavedlocations").unsigned().defaultTo(0);
    users.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
