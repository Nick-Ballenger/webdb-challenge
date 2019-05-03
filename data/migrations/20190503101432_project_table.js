exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function(tbl) {

        tbl.increments()

        tbl
          .string('project_name', 128)
          .notNullable()
          .unique()

          tbl
          .string('project_description')
          
          tbl.boolean('complete').defaultTo(false)

    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects')
};