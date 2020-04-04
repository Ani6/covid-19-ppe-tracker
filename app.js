'use strict';

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const pino = require('express-pino-logger')();
const webpush = require('web-push');

const indexRouter = require('./routes/index');

const vapidKeys = {
    publicKey: fs.readFileSync("./server.pub").toString(),
    privateKey: fs.readFileSync('./server.priv').toString()
};

webpush.setVapidDetails(
    'mailto:web-push-book@gauntface.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);
var app = express();

app.set('view engine', 'ejs');
app.use(pino);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

module.exports = app;
