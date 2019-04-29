exports.up = function(knex) {
  return knex.schema.createTable("pins", pins => {
    pins.increments();
    pins
      .integer("userId")
      .unsigned()
      .notNullable()
      .references("users.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    pins.decimal("LATITUDE", 10, 8);
    pins.decimal("LONGITUDE", 10, 8);
    pins.string("notes", 500);
    pins.boolean("home").notNullable();
    pins.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("pins");
};
