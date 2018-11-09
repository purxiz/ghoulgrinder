var express = require('express')
const app = express()
const port = 3000

const WebSocket = require('express-ws')
WebSocket(app)

app.ws('/echo', (ws, req) => {
  ws.on('message', (msg) => {
    ws.send(msg)
    console.log('gg: message received')
  })

  ws.on('close', () => {
    console.log('gg: WebSocket was closed')
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
    return
  }

  console.log('gg: connected as id ' + connection.threadId);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))