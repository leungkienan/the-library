
exports.up = function(knex) {
  return knex.schema.createTable('steamId', table => {
      table.increments('id')
      table.string('nameId')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('steamId')
};
