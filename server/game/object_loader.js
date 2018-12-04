var db = require('./../database')

exports.load_chunks = (callback) => {
  db.connection.query('SELECT nChunk FROM nodes GROUP BY nChunk', (err, res, fields) => {
    //TODO initialize a map of node objects keyed on chunk
    db.connection.query('SELECT * FROM nodes', (err, res, fields) => {
      //todo get each node chunk, and then add those node to the relevant chunk object's node list
    })
    db.connection.query('SELECT nChunk, vehicles.* FROM nodes, vehicles WHERE nodes.nId = vehicles.nId', (err, res, fields) => {
      //todo add each vehicle to the chunk based on it's chunkId associated
      db.connection.query('SELECT vId, route_steps.*, route_commands.* FROM vehicles, route_steps, route_commands WHERE vehicles.vId = route_steps.vId AND route_commands.rsId = route_steps.rsId', (err, res, fields) => {
        //todo add each route_step to it's vehicle class, and each route step to it's route command
      })
      db.connection.query('SELECT * FROM vehicle_holds', (err, res, fields) => {
        //TODO: fill in each truck's inventory
      })
    })
    db.connection.query('SELECT nChunk, structures.* FROM nodes, structures WHERE nodes.nId = structures.nId', (err, res, fields) => {

    })
    db.connection.query('SELECT nChunk, items.* FROM nodes, items WHERE nodes.nId = items.nId', (err, res, fields) => {

    })
  })
}