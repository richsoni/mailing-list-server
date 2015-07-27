"use strict";
const net = require("net")
const Connection = require("./lib/connection")
const connection = new Connection()

net.createServer(function(sock){
  sock.on('data', function(data){
    const _data = data.toString().trim().split(':')
    if(process.env.DEBUG){
      console.log(data.toString().trim())
    }
    switch(_data[0]){
      case 'subscribe':
        connection.subscribe(_data[1])
        break;
      case 'unsubscribe':
        connection.unsubscribe(_data[1])
        break;
    }
  })
}).listen(3030)
