var express = require('express')
const app = express()
const port = 3000

const WebSocket = require('express-ws')
WebSocket(app)

app.ws('/echo', (ws, req) => {
  ws.on('message', (msg) => {
    ws.send(msg)
    console.log('message received');
  })

  ws.on('close', () => {
    console.log('WebSocket was closed')
  })
})

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
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))