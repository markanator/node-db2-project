"use strict";

var _require = require('../data/config'),
    table = _require.table;

var _require2 = require('express'),
    text = _require2.text;

exports.up = function _callee(knex) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(knex.schema.createTable('cars', function (table) {
            // table.increments('id');
            table.uuid('vin', 17).notNull().unique().primary();
            table.text('make').notNull();
            table.text('model').notNull();
            table.integer('mileage').notNull();
            table.text('transmission');
            table.text('title');
          }));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.down = function _callee2(knex) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(knex.schema.dropTableIfExists('cars'));

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
};