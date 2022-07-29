const express = require('express'),
    app = express(),
    server = require('http').createServer(app);
io = require('socket.io')(server);
let timerId = null,
    sockets = new Set();
var tradedata = require('./data');