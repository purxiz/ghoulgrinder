var db = require('./../database')
var node = require('./../../shared/world/nodes')
var vehicle = require('./../../shared/objects/vehicles')

exports.load_chunks = (dId) => {
  let nodes = []
  db.connection.query('SELECT nodes.* FROM nodes, chunk_views WHERE nodes.cId = chunk_views.cId AND chunk_views.dId = ?', db.connection.escape(dId), (err, res, fields) => {
    console.log(res)
    res.forEach(element => {
      nodes.push([element.nId, element.nLocation, element.cId, element.nType])
    })
    node.bulkAddNode(nodes)
  })
  
  let vehicles = []
  db.connection.query('SELECT vehicles.* FROM vehicles, nodes, chunk_views WHERE vehicles.nId = nodes.nId AND nodes.cId = chunk_views.cId AND chunk_views.dId = ?', db.connection.escape(dId), (err, res, fields) => {
    console.log(res)
    res.forEach(element => {
      vehicles.push([element.vId, element.nId, element.dId, element.vType])
    })
    vehicle.bulkAddVehicle(vehicles)
  })
}