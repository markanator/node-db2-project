const express = require('express');
const knex = require('knex');

const db = require('../data/config');
const { orWhereNotExists } = require('../data/config');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        res.json(await db('cars'));
    } catch (err) {
        next(err);
    }
});

router.get('/:vin', async (req, res, next) => {
    try {
        const car = await db('cars').where('vin', req.params.vin);
        if (car.length <= 0) {
            return res.status(404).json({
                msg: 'Car not found',
            });
        } else {
            res.status(200).json(car);
        }
    } catch (err) {
        next(err);
    }
});

router.post('/', validateCarReqBody(), async (req, res, next) => {
    try {
        await db('cars').insert(req.body);
        //return new car object, from DB
        const newCar = await db('cars').where('vin', req.body.vin).first();
        //
        res.status(201).json(newCar);
    } catch (err) {
        next(err);
    }
});

router.put('/:vin', async (req, res, next) => {
    try {
        await db('cars').where('vin', req.params.vin).update(req.body);

        res.status(200).json({
            msg: 'Sucessfully Updated!',
        });
    } catch (err) {
        next(err);
    }
});

router.delete('/:vin', async (req, res, next) => {
    try {
        await db('cars').where('vin', req.params.vin).del();

        return res.status(200).json({
            message: 'Deleted!',
        });
    } catch (err) {
        return next(err);
    }
});

function validateCarReqBody() {
    return (req, res, next) => {
        if (!req.body) {
            return res.status(400).json({
                msg: 'Request has no content!',
            });
        } else if (
            !req.body.vin ||
            !req.body.make ||
            !req.body.model ||
            !req.body.mileage
        ) {
            return res.status(400).json({
                msg:
                    'Please enter all important fields: VIN,MAKE,MODEL,MILEAGE',
            });
        } else {
            return next();
        }
    };
}

module.exports = router;
