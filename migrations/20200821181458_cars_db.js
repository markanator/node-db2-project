const { table } = require('../data/config');
const { text } = require('express');

exports.up = async function (knex) {
    // make table with coloumns
    await knex.schema.createTable('cars', (table) => {
        // table.increments('id');
        table.uuid('vin', 17).notNull().unique().primary();
        table.text('make').notNull();
        table.text('model').notNull();
        table.integer('mileage').notNull();
        table.text('transmission');
        table.text('title');
    });
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists('cars');
};
