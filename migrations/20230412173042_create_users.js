/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTableIfNotExists("users", (table) => {
    table.increments('id').unsigned().primary()
    table.string('first_name', 150).notNullable()
    table.string('last_name', 150).notNullable()
    table.string('email', 150).notNullable().unique()
    table.string('password_hash', 150).notNullable().unique()
    table.decimal('salary', 15, 2).notNullable()
    table.timestamps(true, true)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users')
};


/**
 * NOTE: comando para criação do arquivo de migration
 *
 * npx knex migrate:make 'create_users'
 */

/**
 * NOTE: comando para executar a migration
 *
 * npx knex migrate:latest
 */

/**
 * NOTE: comando para desfazar a migration
 *
 * npx knex migrate:rollback
 */