const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
// local routes imports
const welcomeRouter = require('./welcome/welcome-router');
const carsRoutes = require('./cars/cars-router');

const server = express();
const port = process.env.PORT || 5000;

server.use(helmet());
server.use(express.json());
server.use(cors());
// routes
server.use(welcomeRouter);
server.use('/cars', carsRoutes);

// error catching
server.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        message: 'Something went wrong',
    });
});

server.listen(port, () => {
    console.log(`## Running at http://localhost:${port} ##`);
});
