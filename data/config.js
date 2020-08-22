const knex = require('knex');
const knexfile = require('../knexfile');

// init a connection to the database
module.exports = knex(knexfile);
