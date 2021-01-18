import express from 'express';
import cookieParser from 'cookie-parser';
import config from 'config'

import indexRouter from './Controllers/IndexController';
import authController from './Controllers/AuthController';
import {DB_URI} from "./Lib/configuration";

if (!DB_URI) {
    console.error("FATAL ERROR: dbUri is not defined.");
    process.exit(1);
}

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/auth', authController);

/**
 * Listen on provided port, on all network interfaces.
 */

app.listen(4000);
