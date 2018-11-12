exports.load_vehicles = (connection, callback) => {
  connection.query('SELECT * FROM vehicles', (err, res, fields) => {
    
  })

  //for each vehicle
  connection.query('SELECT * FROM route_steps WHERE vId = ?', vId, (err, res, fields) => {

  })

  //for each route_step
  connection.query('SELECT * FROM route_commands WHERE rsId = ?', rsId, (err, res, fields) => {
    
  })
}
exports.load_structures = (connection, callback) => {
  connection.query('SELECT * FROM structures', (err, res, fields) => {

  })
}