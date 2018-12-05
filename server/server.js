const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

const loader = require('./game/object_loader')

const structures = require('./game/objects/structures')
const vehicles = require('./game/objects/vehicles')
const worldgen = require('./game/worldgen')

worldgen.initialGen(1);
loader.load(1)

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors())
app.options('*', cors())

app.use(function(req, res, next) {

	//console.log('\nAPI request has been received ' + req.method + req.url);
	next();

});

const WebSocket = require('express-ws')
WebSocket(app)

app.ws('/echo', (ws, req) => {
  ws.id = 1
  //called on websocket first open



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

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api/login', require('./routes/login'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))