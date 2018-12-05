var db = require('./../database')
var node = require('./../../shared/world/nodes')
var vehicle = require('./../../shared/objects/vehicles')
var structure = require('./../../shared/objects/structures')

exports.load = (dId) => {
  let nodes = []
  db.connection.query('SELECT nodes.* FROM nodes, chunks WHERE nodes.cId = chunks.cId AND chunks.dId = ?', db.connection.escape(dId), (err, res, fields) => {
    res.forEach(element => {
      nodes.push([element.nLocation, element.cId, element.nType, element.nId])
    })
    node.bulkAddNode(nodes)
  })
  
  let vehicles = []
  db.connection.query('SELECT vehicles.* FROM vehicles, nodes, chunks WHERE vehicles.nId = nodes.nId AND nodes.cId = chunks.cId AND chunks.dId = ?', db.connection.escape(dId), (err, res, fields) => {
    res.forEach(element => {
      vehicles.push([element.vId, element.nId, element.dId, element.vType])
    })
    vehicle.bulkAddVehicle(vehicles)
  })

  let structures = []
  db.connection.query('SELECT structures.* FROM structures, nodes, chunks WHERE structures.nId = nodes.nId AND nodes.cId = chunks.cId AND chunks.dId = ? ', db.connection.escape(dId), (err, res, fields) => {
    res.forEach(element => {
      structures.push([element.sId, element.nId, element.dId, element.sType, element.sRecipe])
    })
    structure.bulkAddStructure(structures)
  })
}