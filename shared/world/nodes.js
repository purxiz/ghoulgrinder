var chunks = require('./chunks')

class Node {
  constructor(nLocation, nChunk, nType) {
    this.nLocation = nLocation
    this.nChunk = nChunk
    this.nType = nType
    this.vehicles = {}
  }
}

var node_list = {}

exports.addNode = (nId, nLocation, nChunk, nType) => {
  let k = '' + nId
  node_list[k] = new Node(nLocation, nChunk, nType)
  chunks.chunk_list[nChunk] = node_list[k]
}

//format of nodes should be [[nLocation, nChunk, nType, nId], [nLocation, nChunk, nType, nId]]
exports.bulkAddNode = (nodes) => {
  for(let i = 0, len = nodes.length; i < len; ++i){
      node_list[nodes[i][3]] = new Node(nodes[i][1], nodes[i][2], nodes[i][0])
      chunks.addNode([nodes[i][2]], node_list[nodes[i][0]])
  }
}

exports.addVehicle = (nId, vId, vehicle) => {
  let k = '' + nId
  let l = '' + vId
  node_list[k].vehicles[l] = vehicle
}
exports.delVehicle = (nId, vId) => {
  let k = '' + nId
  let l = '' + vId
  delete node_list[k].vehicles[l]
}

exports.addStructure = (nId, structure) => {
  let k = '' + nId
  node_list[k].structure = structure
}

exports.delStructure = (nId) => {
  let k = ''+nId
  delete node_list[k].structure
}