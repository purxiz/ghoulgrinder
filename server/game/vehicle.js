exports.Vehicle = class Vehicle {

  Vehicle(vId, vType){
    this.vId = vId
    this.vType = vType
  }

  get vId(){
    return this.vId
  }

}