var express = require('express')
var game = require('./game/game')
const app = express()
const port = 3000


const WebSocket = require('express-ws')
WebSocket(app)

//game.getUsers().then(results => {
//  console.log(results)
//})

;(async () => {
  console.log(await game.getUsers())
})()

;(async () => {
  console.log(await game.getVehicleRouteSteps())
})()


app.ws('/echo', (ws, req) => {
  ws.on('message', (msg) => {
    ws.send(msg)
    console.log('message received')
  })

  ws.on('close', () => {
    console.log('WebSocket was closed')
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))