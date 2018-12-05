var node = require('./../world/nodes')

class Structure {
  constructor(nId, dId, sType, sRecipe) {
    this.nId = nId
    this.dId = dId
    this.sType = sType
    this.sRecipe = sRecipe
  }

  set recipe(rType) {
    this.rType = rType
  }

  update() {

  }
}

var structure_list = {}

exports.exists = (sId) => {
  let k = '' + sId
  return (k in structure_list)
}

exports.addStructure = (sId, nId, dId, sType, sRecipe) => {
  let k = '' + sId
  if (!(k in structure_list)) {
    structure_list[k] = new Structure(nId, dId, sType, sRecipe)
    node.addStructure(nId, structure_list[k])
  }
}

exports.bulkAddStructure = (structures) => {
  for(let i = 0, len = structures.length; i < len; ++i){
    this.addStructure(structures[i][0], structures[i][1], structures[i][2], structures[i][3], structures[i][4])
  }
  console.log(structure_list)
}

exports.delStructure = (sId) => {
  let k = ''+sId
  node.delStructure(structure_list[k].nId)
  delete structure_list[k]
}

exports.setRecipe = (sId, sRecipe) => {
  let k = ''+ sId
  structure_list[k].recipe = sRecipe
}