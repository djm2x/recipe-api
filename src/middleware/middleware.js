// "use strict";
// const bodyParser = require('body-parser');
// const route = require('../routes/route');

import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';
import { route } from '../routes/route';
import express from 'express';

import { Server } from 'socket.io';
import http from 'http';

/**
 * @param {express.Express} app 
 * @param {http.Server} server 
*/
export function middleware(app, server) {
    //return json to client
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    //cors
    app.use(cors({
        origin: '*'
    }));

    //log info about request
    app.route('*').get((req, res, next) => {
        console.log(`express:req from ${req.originalUrl}`);
        console.log(`express:req type ${req.method}`);
        next();
    });
    // socket import

    const io = new Server(server, {cors: {origin: '*'}})
    // /**
    //  * @param {*} req 
    //  */
    // console.warn('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>0')
    app.use(function (req, res, next) {
        console.warn('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>1')
        req.io = io;
        next();
    });
    
    io.on('connection', (socket) => {
        console.log('user connected');
        socket.on('disconnect', function () {
            console.log('user disconnected');
        });
    })
    
    io.of('/comments').on('connection', (socket) => {
        console.warn('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>2')
        console.log('>> Socket-Comment');
    });

    io.of('/noteRecette').on('connection', (socket) => {
        console.log('>> Socket-noteRecette');
    });

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
