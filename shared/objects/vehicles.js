class Vehicle {
  constructor(nId, dId, vType) {
    this.nId = nId
    this.dId = dId
    this.vType = vType
  }

  //TODO: add route function
  //TODO: update function

}
var vehicle_list = new Map

exports.addVehicle = (insertId, nId, dId, vType) => {
  vehicle_list.set(insertId, new Vehicle(nId, dId, vType))
}

delVehicle = (vId, dId) => {
  console.log('removing vehicle ' + vId)
  vehicle_list.delete(vId)
}

exports.setRoute = (vId, msg, dId, connection) => {
  //TODO: recursively insert route commands
  console.log('creating route for vehicle ' + vId) 
}