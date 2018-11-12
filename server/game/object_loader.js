exports.load_vehicles = (connection, callback) => {
  connection.query('SELECT * FROM vehicles', (err, res, fields) => {
    
  })

  //for each vehicle
  connection.query('SELECT * FROM route_steps WHERE vId = ?', vId, (err, res, fields) => {

  })

  //for each route_step
  connection.query('SELECT * FROM route_commands WHERE rsId = ?', rsId, (err, res, fields) => {
    
  })
  //TODO: nest loops and callback should return vehicle objects Map.
}
exports.load_structures = (connection, callback) => {
  connection.query('SELECT * FROM structures', (err, res, fields) => {
    //TODO: return structures object maps
  })
}

exports.load_items = (connection, callback) => {
  connection.query('SELECT * FROM items', (err, res, fields) => {
    //TODO: create and return item map
  })
}

exports.load_chunks = (connection, callback) => {
  connection.query('SELECT * FROM nodes ORDER BY nChunk')
}