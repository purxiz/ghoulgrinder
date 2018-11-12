var Protocol = require('./../protocol')

class Vehicle {
  constructor(nId, dId, vType) {
    this.nId = nId
    this.dId = dId
    this.vType = vType
  }
}

var vehicle_list = new Map

exports.interpret = (msg, dId, connection) => {
  switch (msg[0]) {
    case Protocol.vehicles.BUILD:
      addVehicle(msg[1], msg[2], dId, connection)
      break
    case Protocol.vehicles.DELETE:
      delVehicle(msg[1], dId, connection)
      break
    default:
  }
}


addVehicle = (nId, vType, dId, connection) => {
  console.log('adding vehicles type ' + vType + ' at node ' + nId)
  let insertable = {
    nId: connection.escape(nId),
    dId: connection.escape(dId),
    sType: connection.escape(vType)
  }
  connection.query('INSERT INTO vehicles SET ?', insertable, (err, res, fields) => {
    if (err) {
      console.log(err)
      return false
    }
    vehicle_list.set(res.insertId, new Vehicle(nId, dId, vType))
  })
}

delVehicle = (vId, dId, connection) => {
  console.log('removing vehicle ' + vId)
  connection.query('DELETE FROM vehicles WHERE vId=' + connection.escape(vId), (err, res, fields) => {
    if (err) {
      return false
    }
    vehicle_list.delete(vId)
  })
}

setRoute = (vId, connection, ...steps) => {

}