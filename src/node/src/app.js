import express from 'express';
import morgan from 'morgan';
import cors from 'cors';


import db from './config/db';
import mealTypesRouter from './routes/mealType';
import mealTimesRouter from './routes/mealTime';
import productsRouter from './routes/product';

const app = express();

db.authenticate()
    .then(() => { db.sync(/*{force: true}*/)
        .then(result => {
            console.log('Database connected');
        })
        .catch(err => {console.log(err.message)});
    })
    .catch(err => {console.log(err.message)});

app.use(morgan('combined'));
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Routes
app.use('/product', productsRouter);
app.use('/mealType', mealTypesRouter);
app.use('/mealTime', mealTimesRouter);

export default app;