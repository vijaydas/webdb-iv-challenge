const knex = require("knex");
const knexConfig = require('../knexfile');
const dbClient = knex(knexConfig.development);

module.exports = dbClient;
