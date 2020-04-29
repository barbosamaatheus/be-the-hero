exports.up = function (knex) {
  return knex.schema.createTable("ongs", function (table) {
    table.string("id").primary();
    table.string("name").notNullable();
    table.string("email").notNullable().unique();
    table.string("whatsapp");
    table.string("city").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("ongs");
};
