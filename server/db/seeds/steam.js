
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steamId').del()
    .then(function () {
      // Inserts seed entries
      return knex('steamId').insert([
        {id: 1, nameId: 'rowValue1'},
        {id: 2, nameId: 'rowValue2'},
        {id: 3, nameId: 'rowValue3'}
      ]);
    });
};
