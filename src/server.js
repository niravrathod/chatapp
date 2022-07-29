const express = require('express'),
    app = express(),
    server = require('http').createServer(app);
io = require('socket.io')(server);
let timerId = null,
    sockets = new Set();
var tradedata = require('./data');

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