var mysql = require('mysql')
var connection = mysql.createConnection({
  socketPath: '/var/run/mysqld/mysqld.sock',
  user: 'ghoulgrinder',
  password: 'dev_secret',
  database: 'ghoulgrinder'
})

connection.connect((err) => {
  if (err) {
    console.error(err.stack)
    return
  }
  console.log('gg: connected as id ' + connection.threadId);
});

exports.getUsers = () => {
  return new Promise((c) => {
    connection.query('SELECT * FROM accounts', (error, results, fields) => {
      c(results)
    })
  })
}

exports.insertUser = (email, password) => {
  let insertable = {
    aEmail : email,
    aPassword : password
  }
  connection.query('INSERT INTO accounts SET ?', insertable, (error, results, fields) => {
  })
}

exports.getVehicleRouteSteps = (vId) => {
  connection.query('SELECT * FROM routes, route_steps WHERE route_steps.rId = routes.rId', (e, r, f) => {

  })
}

exports.fillUpAccounts = (x) => {
  let insertable = [];
  for (let i = 0; i < x; ++i) {
    let str = ''
    for (let j = 0; j < 5; ++j) {
      str += String.fromCharCode((Math.random() * 90 + 32) | 0)
    }
  }
}