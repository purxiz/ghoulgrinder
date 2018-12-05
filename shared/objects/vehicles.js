var nodes = require('./../world/nodes')

class Vehicle {
  constructor(nId, dId, vType) {
    this.nId = nId
    this.dId = dId
    this.vType = vType
    this.route = []
  }

  //TODO: add route function
  //TODO: update function
  update() {
    this.route.progress += 1;
  }

}
var vehicle_list = {}

exports.addVehicle = (insertId, nId, dId, vType) => {
  let k = '' + insertId
  vehicle_list[k] = new Vehicle(nId, dId, vType)
  nodes.addVehicle(nId, insertId, vehicle_list[insertId])
}

exports.bulkAddVehicle = (vehicles) => {
  console.log("I was called")
  for(let i = 0, len = vehicles.length; i < len; ++i){
    addVehicle(vehicles[i][0], vehicles[i][1], vehicles[i][2], vehicles[i][3])
  }
}

exports.delVehicle = (vId) => {
  let k = '' + vId
  nodes.deleteVehicle(vehicle_list[vId].nId, vId)
  delete vehicle_list[vId]
}

exports.setRoute = (vId, msg) => {
  let k = '' + vId

  for (let i = 2, j = msg.length; i < j; ++i) {
    vehicle_list[k].route.push({
      progress: 0,
      start: msg[i][0],
      end: msg[i][1]
    })
  }

}