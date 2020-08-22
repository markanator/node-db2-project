"use strict";

var express = require('express');

var knex = require('knex');

var db = require('../data/config');

var _require = require('../data/config'),
    orWhereNotExists = _require.orWhereNotExists;

var router = express.Router();
router.get('/', function _callee(req, res, next) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.t0 = res;
          _context.next = 4;
          return regeneratorRuntime.awrap(db('cars'));

        case 4:
          _context.t1 = _context.sent;

          _context.t0.json.call(_context.t0, _context.t1);

          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t2 = _context["catch"](0);
          next(_context.t2);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
router.get('/:vin', function _callee2(req, res, next) {
  var car;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(db('cars').where('vin', req.params.vin));

        case 3:
          car = _context2.sent;

          if (!(car.length <= 0)) {
            _context2.next = 8;
            break;
          }

          return _context2.abrupt("return", res.status(404).json({
            msg: 'Car not found'
          }));

        case 8:
          res.status(200).json(car);

        case 9:
          _context2.next = 14;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          next(_context2.t0);

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 11]]);
});
router.post('/', validateCarReqBody(), function _callee3(req, res, next) {
  var newCar;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(db('cars').insert(req.body));

        case 3:
          _context3.next = 5;
          return regeneratorRuntime.awrap(db('cars').where('vin', req.body.vin).first());

        case 5:
          newCar = _context3.sent;
          //
          res.status(201).json(newCar);
          _context3.next = 12;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          next(_context3.t0);

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 9]]);
});
router.put('/:vin', function _callee4(req, res, next) {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(db('cars').where('vin', req.params.vin).update(req.body));

        case 3:
          res.status(200).json({
            msg: 'Sucessfully Updated!'
          });
          _context4.next = 9;
          break;

        case 6:
          _context4.prev = 6;
          _context4.t0 = _context4["catch"](0);
          next(_context4.t0);

        case 9:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 6]]);
});
router["delete"]('/:vin', function _callee5(req, res, next) {
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(db('cars').where('vin', req.params.vin).del());

        case 3:
          return _context5.abrupt("return", res.status(200).json({
            message: 'Deleted!'
          }));

        case 6:
          _context5.prev = 6;
          _context5.t0 = _context5["catch"](0);
          return _context5.abrupt("return", next(_context5.t0));

        case 9:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 6]]);
});

function validateCarReqBody() {
  return function (req, res, next) {
    if (!req.body) {
      return res.status(400).json({
        msg: 'Request has no content!'
      });
    } else if (!req.body.vin || !req.body.make || !req.body.model || !req.body.mileage) {
      return res.status(400).json({
        msg: 'Please enter all important fields: VIN,MAKE,MODEL,MILEAGE'
      });
    } else {
      return next();
    }
  };
}

module.exports = router;