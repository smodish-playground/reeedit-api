exports.up = function (knex) {
  return knex.schema.createTable('posts', (tbl) => {
    tbl.increments('id') // automatically increments a new number for each entry - this will be the Primary Key
    tbl.integer('user_id').notNullable() // this field is required
    tbl.text('title').unique().notNullable() // this field is both required and must be unique
    tbl.text('body')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('posts') // this will delete the posts table if run
}
