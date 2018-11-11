var Protocol = require('./../protocol')
console.log(Protocol)

class Structure {
  constructor(nId, sType, sId) {
    this.x = x
    this.y = y
    this.sType = sType
    this.sId = sId
  }

  set recipe(rType) {
    this.rType = rType
  }
  
  update() {
    
  }
}

structures_list = [];

exports.interpret = (msg, connection) => {
  console.log(msg[0])
  console.log(Protocol.protocol.BUILD)
  if(msg[0] === Protocol.protocol.BUILD){
    console.log('hi')
    addStructure(msg[1], msg[2], connection)
  }
}

addStructure = (nId, sType, connection) => {
  console.log('adding structure')
  let insertable = {
    nId : connection.escape(nId),
    sType : connection.escape(sType)
  }
  connection.query('INSERT INTO structures SET ?', insertable, (err, res, fields) => {
    if(err){
      return false
    }
    structure_list.push(new Structure(nId, sType, res.insertId))
  })
}

setRecipe = (sId, sRecipe) => {

}