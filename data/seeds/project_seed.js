exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: 'Birdhouse', project_description:'Make a birdhouse'},
        {project_name: 'Pina Colada', project_description:"Doctor, ain't there nothin' I can take?."}
      ]);
    });
};