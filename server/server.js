var express = require('express')
var game = require('./game/game')
const app = express()
const port = 3000


const WebSocket = require('express-ws')
WebSocket(app)



;(async () => {
  console.log(await game.getUsers())
})()

;(async () => {
<<<<<<< HEAD
  console.log(await game.getUsers())
})()

;(async () => {
=======
>>>>>>> 86f0e38b4175408a9685500c2c2fcaf2028ff79d
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