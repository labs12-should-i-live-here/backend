
exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", function(tbl) {
    
    tbl.increments("id");   //primary key
    tbl.string("username", 128).unique().notNullable();
    tbl.string("password", 128).notNullable();
    tbl.timestamp("createdAt").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
