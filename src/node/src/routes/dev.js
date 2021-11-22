import { Router } from 'express';
import sequelize_fixtures from 'sequelize-fixtures';
import db from '../config/db';

// FIXTURES
import mealTypeModel from '../models/mealType';
import productModel from '../models/product';
//import comboModel from '../models/combo';
import mealTypeFixtures from '../fixtures/mealType';
import productFixtures from '../fixtures/product';
//import comboFixtures from '../fixtures/combo';

const router = Router();

router.get('/', (req, res) => {
    return res.status(200).send({
        message: 'Development utilities: sync-db, load-fixtures'
    });
});

router.get('/sync-db', async (req, res) => {
    let message = '';
    await db.sync({force: true})
        .then(result => {
            message = 'Database synchronized';
        })
        .catch(err => {
            message = err.message
        });
    return res.status(200).send({
        message
    });
});

router.get('/load-fixtures', async (req, res) => {

    await sequelize_fixtures.loadFixtures(mealTypeFixtures, { mealType: mealTypeModel})
        .then(() => {
            sequelize_fixtures.loadFixtures(productFixtures, { product: productModel})
            .then(() => {
                return res.status(200).send({
                    message: "Fixtures loaded"
                });
                /*
                sequelize_fixtures.loadFixtures(comboFixtures, { combo: comboModel})
                .then(() => {
                    return res.status(200).send({
                        message: "Fixtures loaded"
                    });
                }).catch((err)=>{
                    return res.status(200).send({
                        message: err.message
                    });
                });
                */
                
            }).catch((err)=>{
                return res.status(200).send({
                    message: err.message
                });
            });
        }).catch((err)=>{
            return res.status(200).send({
                message: err.message
            });
        });
});

export default router;