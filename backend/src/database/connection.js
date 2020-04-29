const knex = require("knex");
const config = require("../../knexfile");

let envConfig = config.production;

if (process.env.NODE_ENV === "test") {
  envConfig = config.test;
} else if (process.env.NODE_ENV === "dev") {
  envConfig = config.development;
}
console.log("connection on:", envConfig);
const connection = knex(envConfig);

connection.migrate.latest();

module.exports = connection;
