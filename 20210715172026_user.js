
exports.up = function(knex) {
  return knex.schema.createTable('user',(table)=>{
    table.increments().primary()
    table.string('name',255).notNullable()
    table.string('email',255).notNullable()
    table.string('password',255).notNullable()
    table.string('phone',255).notNullable()
    table.date('DOB',255).notNullable()
    table.date('createdOn').notNullable()
    table.date('createdBy').notNullable()
    table.date('UpdatedOn').notNullable()
    table.date('UpdatedBy').notNullable()

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('user')
};
