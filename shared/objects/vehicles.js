var Protocol = require('./../protocol')

class Vehicle {
  constructor(nId, dId, vType) {
    this.nId = nId
    this.dId = dId
    this.vType = vType
  }
}

exports.interpret = (msg, dId, connection) => {
  switch(msg[0]){
    case Protocol.vehicles.ROUTE_SET:
      setRoute(msg, dId, connection)
    break;
  }
}

setRoute = (msg, dId, connection) => {
  for(let i = 0, length = msg.length; i < length; ++i){

  }
}