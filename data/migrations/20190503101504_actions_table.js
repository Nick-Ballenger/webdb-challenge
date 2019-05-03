

exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(tbl) {

        tbl.increments().unique()

        tbl
          .string('action_name', 128)
          .notNullable() 
          .unique()

        tbl
          .string('action_description')
          .notNullable() 

          tbl.boolean('complete').defaultTo(false)

        tbl
          .integer('project_id') 
          .unsigned()
          .notNullable() 
          .references('id')
          .inTable('project') 
          .onDelete('RESTRICT')
          .onUpdate('CASCADE')    
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions')
};