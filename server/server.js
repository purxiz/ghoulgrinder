const express = require('express')
const app = express()
const port = 3000

const loader = require('./game/object_loader')

const structures = require('./game/objects/structures')
const vehicles = require('./game/objects/vehicles')
const worldgen = require('./game/worldgen')

loader.load_chunks(80)
worldgen.initialGen();

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
      vehicles.interpret(msg, ws.id)
    }
    else if (msg[0] < 40) {
      console.log('received a structure message')
      structures.interpret(msg, ws.id)
    }
  })

  ws.on('close', () => {
    console.log('WebSocket was closed')
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))