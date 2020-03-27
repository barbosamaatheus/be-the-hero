const knex = require("knex");
const config = require("../../knexfile");

const envConfig =
  process.env.NODE_ENV === "test" ? config.test : config.development;

const connection = knex(envConfig);

module.exports = connection;
