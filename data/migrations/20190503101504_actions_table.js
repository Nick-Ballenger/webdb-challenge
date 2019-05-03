

exports.up = function(knex, Promise) {
    return knex.schema.createTable('action', function(tbl) {

        tbl.increments().unique()

        tbl
          .string('name', 128)
          .notNullable() 
          .unique()

        tbl
          .string('description')
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
    return knex.schema.dropTableIfExists('action')
};