const express = require('express')
const http = require('http')
const socketIO = require('socket.io')

const port = process.env.PORT || 4001;
const app = express()
const server = http.createServer(app)
const io = socketIO(server,{
  path:'/transporter'
})


io.on('connection', socket => {
  console.log('User connected')
  console.log(socket);
  socket.on('disconnect', () => {
    console.log('user disconnected')
  });
})

server.listen(port, () => console.log(`Listening on port ${port}`));