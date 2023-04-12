/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTableIfNotExists("users_roles", (table) => {
    table.integer('user_id').unsigned();

    table.foreign('user_id')
      .references('users.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')


    table.integer('role_id').unsigned();
    table.foreign('role_id')
      .references('roles.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')


    table.timestamps(true, true)

    table.primary(['user_id', 'role_id']);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users_roles')
};

