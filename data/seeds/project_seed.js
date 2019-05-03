exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {name: 'Birdhouse', description:'Make a birdhouse'},
        {name: 'Pina Colada', description:"Doctor, ain't there nothin' I can take?."}
      ]);
    });
};