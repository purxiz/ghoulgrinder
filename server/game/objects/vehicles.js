var Protocol = require('./../../../shared/protocol')
var vehicles = require('./../../../shared/objects/vehicles')
var db = require('./../../database')

exports.interpret = (msg, dId) => {
  switch (msg[0]) {
    case Protocol.vehicles.BUILD:
      addVehicle(msg[1], msg[2], dId)
      break
    case Protocol.vehicles.DELETE:
      delVehicle(msg[1], dId)
      break
    case Protocol.vehicles.ROUTE_ADD:
      setRoute(msg[1], msg, dId)
      break
    default:
  }
}


addVehicle = (nId, vType, dId) => {
  //Todo: check if dId owns node 
  console.log('adding vehicles type ' + vType + ' at node ' + nId)
  let insertable = {
    nId: db.connection.escape(nId),
    dId: db.connection.escape(dId),
    vType: db.connection.escape(vType)
  }
  db.connection.query('INSERT INTO vehicles SET ?', insertable, (err, res, fields) => {
    if (err) {
      console.log(err)
      return false
    }
    vehicles.addVehicle(res.insertId, nId, dId, vType)
  })
}

delVehicle = (vId, dId) => {
  //TODO: check vId
  console.log('removing vehicle ' + vId)
  db.connection.query('DELETE FROM vehicles WHERE vId=' + db.connection.escape(vId), (err, res, fields) => {
    if (err) {
      return false
    }
    vehicles.delVehicle(vId, dId)
  })
}

setRoute = (vId, msg, dId) => {
  //TODO: recursively insert route commands
  console.log('creating route for vehicle ' + vId) 
  let insertable = []
  for(let i = 2, j = msg.length; i < j; ++i) {
    insertable.push([vId, i-2, 0, msg[i][0], msg[i][1]])
  }
  db.connection.query('INSERT INTO route_steps (vId, rsStep, rsProgress, rsStartNode, rsEndNode) VALUES ?', [insertable], (err, res, fields) => {
    if(err) {
      console.log(err)
      return false
    }
    vehicles.setRoute(msg)
  })
}