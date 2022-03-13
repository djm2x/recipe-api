// import 'zone.js/dist/zone-node';
// require('reflect-metadata');
// express = require('express');
import express from 'express';
import http from 'http';
import { middleware } from './src/middleware/middleware';
import { mongoConnection } from './src/models/dbContext';
// const middleware = require('./src/middleware/middleware');
// const insertCategorie = require('./src/utils/categorieList');
// const mongoConnection = require('./src/models/dbContext');
// const seedData = require('./src/utils/seedData');

mongoConnection();


const PORT = process.env.PORT || 3000;
//
const app = express();
//
const server = http.createServer(app);
//
// seedData.seedUsers();
// seedData.seedRecettes();
// seedData.seedAdminUser();
// insertCategorie();
middleware(app, server);

server.listen(PORT, () => console.log(`-runnig in port ${PORT}`));
// heroku login
// git init
// heroku git:remote -a recette-cuisine
// git add .
// git commit -am 'better'
// git push heroku master
// https://ouvrier.herokuapp.com/
