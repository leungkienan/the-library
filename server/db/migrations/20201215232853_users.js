
exports.up = function(knex) {
  return knex.schema.createTable('userInput', table => {
      table.increments('id')
      table.string('name')
  })
};

exports.down = function(knex) {
  
};
