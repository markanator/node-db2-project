"use strict";

var express = require('express');

var router = express.Router();
router.get('/', function (req, res, next) {
  res.json({
    message: 'Welcome to NODE DB2 PROJECT'
  });
});
module.exports = router;