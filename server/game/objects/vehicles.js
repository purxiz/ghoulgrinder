var Protocol = require('./../../../shared/protocol')
var vehicles = require('./../../../shared/objects/vehicles')

exports.interpret = (msg, dId, connection) => {
  switch (msg[0]) {
    case Protocol.vehicles.BUILD:
      addVehicle(msg[1], msg[2], dId, connection)
      break
    case Protocol.vehicles.DELETE:
      delVehicle(msg[1], dId, connection)
      break
    case Protocol.vehicles.ROUTE_ADD:
      setRoute(msg[1], msg, dId, connection)
      break
    default:
  }
}


addVehicle = (nId, vType, dId, connection) => {
  //Todo: check vId
  console.log('adding vehicles type ' + vType + ' at node ' + nId)
  let insertable = {
    nId: connection.escape(nId),
    dId: connection.escape(dId),
    vType: connection.escape(vType)
  }
  connection.query('INSERT INTO vehicles SET ?', insertable, (err, res, fields) => {
    if (err) {
      console.log(err)
      return false
    }
    vehicles.addVehicle(res.insertId, nId, dId, vType)
  })
}

delVehicle = (vId, dId, connection) => {
  //TODO: check vId
  console.log('removing vehicle ' + vId)
  connection.query('DELETE FROM vehicles WHERE vId=' + connection.escape(vId), (err, res, fields) => {
    if (err) {
      return false
    }
    vehicles.delVehicle(vId, dId)
  })
}

setRoute = (vId, msg, dId, connection) => {
  //TODO: recursively insert route commands
  console.log('creating route for vehicle ' + vId) 
  let insertable = []
  console.log(insertable)
  for(let i = 2, j = msg.length; i < j; ++i) {
    insertable.push([vId, i-2, 0, msg[i][0], msg[i][1]])
    console.log(insertable[i-2])
  }
  connection.query('INSERT INTO route_steps (vId, rsStep, rsProgress, rsStartNode, rsEndNode) VALUES ?', [insertable], (err, res, fields) => {
    if(err) {
      console.log(err)
      return false
    }
  })
}