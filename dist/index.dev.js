"use strict";

var express = require('express');

var helmet = require('helmet');

var cors = require('cors'); // local routes imports


var welcomeRouter = require('./welcome/welcome-router');

var carsRoutes = require('./cars/cars-router');

var server = express();
var port = process.env.PORT || 5000;
server.use(helmet());
server.use(express.json());
server.use(cors()); // routes

server.use(welcomeRouter);
server.use('/cars', carsRoutes); // error catching

server.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).json({
    message: 'Something went wrong'
  });
});
server.listen(port, function () {
  console.log("## Running at http://localhost:".concat(port, " ##"));
});