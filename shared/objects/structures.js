var Protocol = require('./../protocol')
const db = require('./../../server/database')

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

var structure_list = new Map

exports.interpret = (msg, dId) => {
  switch (msg[0]) {
    case Protocol.structures.BUILD:
      addStructure(msg[1], msg[2], dId)
      break
    case Protocol.structures.DELETE:
      delStructure(msg[1])
      break
    case Protocol.structures.RECIPE_SET:
      setRecipe(msg[1], msg[2])
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
    structure_list.set(res.insertId, new Structure(nId, dId, sType))
  })
}

delStructure = (sId) => {
  console.log('removing structure ' + sId)
  db.connection.query('DELETE FROM structures WHERE sId=' + connection.escape(sId), (err, res, fields) => {
    if (err) {
      return false
    }
    structure_list.delete(sId)
  })
}

setRecipe = (sId, sRecipe) => {
  console.log('setting recipe to type ' + sRecipe + ' at structure ' + sId)
  db.connection.query('UPDATE TABLE structures SET sRecipe=' + connection.escape(sRecipe) + 'WHERE sId=' + connection.escape(sId), (err, res, fields) => {
    if (err) {
      return false
    }
    structure_list.get(sId).setRecipe(sRecipe)
  })
}