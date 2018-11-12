const express = require('express')
const app = express()
const port = 3000

const structures = require('./../shared/objects/structures')
const vehicles = require('./../shared/objects/vehicles')

var mysql = require('mysql')
var connection = mysql.createConnection({
  socketPath: '/var/run/mysqld/mysqld.sock',
  user: 'ghoulgrinder',
  password: 'dev_secret',
  database: 'ghoulgrinder'
})

connection.connect((err) => {
  if (err) {
    console.error(err.stack)
    return
  }
  console.log('gg: connected as id ' + connection.threadId);
})


const WebSocket = require('express-ws')
WebSocket(app)

app.ws('/echo', (ws, req) => {
  ws.id = 1
  ws.on('message', (msg) => {
    console.log(ws.id)
    msg = JSON.parse(msg)
    //Handle earlier protocols earlier if necessary
    if (msg[0] < 30) {
      console.log('received a vehicle message')
      vehicles.interpret(msg, ws.id, connection)
    }
    if (msg[0] < 40) {
      console.log('received a structure message')
      structures.interpret(msg, ws.id, connection)
    }
  })

  ws.on('close', () => {
    console.log('WebSocket was closed')
  })
})

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api/login', require('./routes/login'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))