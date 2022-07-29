const express = require('express'),
    app = express(),
    server = require('http').createServer(app);
io = require('socket.io')(server);
let timerId = null,
    sockets = new Set();
var tradedata = require('./data');

var localdata;

app.use(express.static(__dirname + '/dist'));

io.on('connection', socket => {

    console.log(`Socket ${socket.id} added`);
    localdata = tradedata.data;
    sockets.add(socket);
    if (!timerId) {
        startTimer();
    }
    socket.on('clientdata', data => {
        console.log(data);
    });
    socket.on('disconnect', () => {
        console.log(`Deleting socket: ${socket.id}`);
        sockets.delete(socket);
        console.log(`Remaining sockets: ${sockets.size}`);
    });

});

function startTimer() {
    timerId = setInterval(() => {
        if (!sockets.size) {
            clearInterval(timerId);
            timerId = null;
            console.log(`Timer stopped`);
        }
        updateData();
        for (const s of sockets) {
            s.emit('data', { data: localdata });
        }

    }, 10);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function updateData() {
    localdata.forEach(
        (a) => {
            a.Coupon = getRandomInt(10, 500);
            a.Notional = getRandomInt(1000000, 7000000);
        });
}

server.listen(8080);
console.log('Visit http://localhost:8080 in your browser');