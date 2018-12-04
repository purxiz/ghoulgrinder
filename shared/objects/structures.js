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

var structure_list = {}

exports.addStructure = (insertId, nId, dId, sType) => {
  let k = '' + insertId
  if (!(k in structure_list)) {
    structure_list[k] = new Structure(nId, dId, sType)
  }
}

exports.delStructure = (sId) => {
  let k = ''+sId
  delete structure_list[k]
}

exports.setRecipe = (sId, sRecipe) => {
  let k = ''+ sId
  structure_list[k].setRecipe(sRecipe)
}