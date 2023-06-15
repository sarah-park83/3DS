exports.up = (knex) => {
  return knex.schema.createTable('words', (table) => {
    table.increments('id').primary()
    table.string('word')
    table.integer('difficulty')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('words')
}
