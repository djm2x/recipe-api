// "use strict";
// const bodyParser = require('body-parser');
// const route = require('../routes/route');

import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';
import {route} from '../routes/route';
import express from 'express';


export function middleware(app) {
    //return json to client
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    //cors
    app.use(cors());

    //log info about request
    app.route('*').get((req, res, next) => {
        console.log(`express:req from ${req.originalUrl}`);
        console.log(`express:req type ${req.method}`);
        next();
    });
    // socket import
    // require('./io');

    // router
    route(app);

    // static files
    app.use(express.static(path.join(process.cwd(), 'wwwroot')));
    // app.use(express.static(path.join(__dirname, 'wwwroot/users')));
    // app.use(express.static(path.join(__dirname, 'wwwroot/recettes')));
    // server side rendering 'angular universal'
    // require('./ssr');
};

// export const middleware;
