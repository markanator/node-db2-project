"use strict";

var knex = require('knex');

var knexfile = require('../knexfile'); // init a connection to the database


module.exports = knex(knexfile);