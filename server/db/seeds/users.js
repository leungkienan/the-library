
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('userInput').del()
    .then(function () {
      // Inserts seed entries
      return knex('userInput').insert([
        {id: 1, name:''},
      ]);
    });
};
