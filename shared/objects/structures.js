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

addStructure = (insertId, nId, dId, sType) => {
    structure_list.set(insertId, new Structure(nId, dId, sType))
}

delStructure = (sId) => {
    structure_list.delete(sId)
}

setRecipe = (sId, sRecipe) => {
    structure_list.get(sId).setRecipe(sRecipe)
}