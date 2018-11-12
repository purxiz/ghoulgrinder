var Protocol = require('./../protocol')

class Structure {
  constructor(nId, dId, sType) {
    this.nId = nId
    this.dId = dId
    this.sType = sType
  }

  set recipe(rType) {
    this.rType = rType
  }

  update() {

  }
}

var structure_list = new Map;

exports.interpret = (msg, dId, connection) => {
  switch (msg[0]) {
    case Protocol.structures.BUILD:
      addStructure(msg[1], msg[2], dId, connection)
      break;
    case Protocol.structures.DELETE:
      delStructure(msg[1], connection)
      break;
    case Protocol.structures.RECIPE_SET:
      setRecipe(msg[1], msg[2], connection)
      break;
    default:
  }
}

addStructure = (nId, dId, sType, connection) => {
  console.log('adding structure type ' + sType + ' at node ' + nId)
  let insertable = {
    nId: connection.escape(nId),
    dId: connection.escape(dId),
    sType: connection.escape(sType)
  }
  connection.query('INSERT INTO structures SET ?', insertable, (err, res, fields) => {
    if (err) {
      console.log(err)
      return false
    }
    structure_list.set(res.insertId, new Structure(nId, sType))
  })
}

delStructure = (sId, connection) => {
  console.log('removing structure ' + sId)
  connection.query('DELETE FROM structures WHERE sId=' + connection.escape(sId), (err, res, fields) => {
    if (err) {
      return false
    }
    structure_list.delete(sId)
  })
}

setRecipe = (sId, sRecipe, connection) => {
  console.log('setting recipe to type ' + sRecipe + ' at structure ' + sId)
  connection.query('UPDATE TABLE structures SET sRecipe=' + connection.escape(sRecipe) + 'WHERE sId=' + connection.escape(sId), (err, res, fields) => {
    if(err){
      return false
    }
    structure_list.get(sId).setRecipe(sRecipe)
  })
}