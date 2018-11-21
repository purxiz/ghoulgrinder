var Protocol = require('./../../../shared/protocol')
var structures = require('./../../../shared/objects/structures')
const db = require('./../../database')

exports.interpret = (msg, dId) => {
  switch (msg[0]) {
    case Protocol.structures.BUILD:
      addStructure(msg[1], msg[2], dId)
      break
    case Protocol.structures.DELETE:
      delStructure(msg[1], dId)
      break
    case Protocol.structures.RECIPE_SET:
      setRecipe(msg[1], msg[2], dId)
      break
    default:
  }
}

addStructure = (nId, dId, sType) => {
  console.log('adding structure type ' + sType + ' at node ' + nId)
  let insertable = {
    nId: db.connection.escape(nId),
    dId: db.connection.escape(dId),
    sType: db.connection.escape(sType)
  }
  db.connection.query('INSERT INTO structures SET ?', insertable, (err, res, fields) => {
    if (err) {
      console.log(err)
      return false
    }
    structures.addStructure(insertId, nId, dId, sType)
  })
}

delStructure = (sId, dId) => {
  //TODO: check dId owns structure
  console.log('removing structure ' + sId)
  db.connection.query('DELETE FROM structures WHERE sId=' + connection.escape(sId), (err, res, fields) => {
    if (err) {
      return false
    }
    structures.delStructure(sId)
  })
}

setRecipe = (sId, sRecipe, dId) => {
  //TODO: check dId owns structure
  console.log('setting recipe to type ' + sRecipe + ' at structure ' + sId)
  db.connection.query('UPDATE TABLE structures SET sRecipe=' + connection.escape(sRecipe) + 'WHERE sId=' + connection.escape(sId), (err, res, fields) => {
    if (err) {
      return false
    }
    structures.setRecipe(sid, sRecipe)
  })
}