const cleaner = require('knex-cleaner');
// will prevent foreign key errors
// when trying to truncate the tables that have
// FK pointing to them
exports.seed = function(knex) {
  return cleaner.clean(knex);
  // after this command, all tables are empty
  // and all primary keys are reset
};
