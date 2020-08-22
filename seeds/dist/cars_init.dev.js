"use strict";

exports.seed = function _callee(knex) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(knex('cars').truncate());

        case 2:
          _context.next = 4;
          return regeneratorRuntime.awrap(knex('cars').insert([{
            vin: '2T1BR30E46C595221',
            make: 'Toyota',
            model: 'Corola',
            mileage: 101234,
            title: 'clean',
            transmission: 'automatic'
          }, {
            vin: 'JM3ER29L070133282',
            make: 'Mazda',
            model: 'CX 7',
            mileage: 110975,
            title: 'clean',
            transmission: 'automatic'
          }, {
            vin: '1ZVFT80N475211367',
            make: 'Ford',
            model: 'Mustang',
            mileage: 91236,
            title: 'salvage',
            transmission: 'automatic'
          }, {
            vin: 'LM4AC113061105688',
            make: 'Suzuki',
            model: 'LT 80',
            mileage: 141234,
            title: 'rebuilt',
            transmission: 'automatic'
          }, {
            vin: 'WBAAV33421FU91768',
            make: 'BMW',
            model: '3 Series',
            mileage: 199990,
            title: 'clean',
            transmission: 'manual'
          }]));

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};