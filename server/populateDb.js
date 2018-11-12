var num_entries = 1000;
var mysql = require('mysql')
var connection = mysql.createConnection({
  socketPath: '/var/run/mysqld/mysqld.sock',
  user: 'ghoulgrinder',
  password: 'dev_secret',
  database: 'ghoulgrinder'
})

randomId = () => {
  return (Math.random() * (num_entries) + 1) | 0
}

connection.connect((err) => {
  if (err) {
    console.error(err.stack)
    return
  }
  console.log('gg: connected as id ' + connection.threadId);
})

randomString = (length) => {
  let str = ''
  for (let i = 0; i < length; ++i) {
    str += String.fromCharCode((Math.random() * 90 + 32) | 0);
  }
  return str;
}

//accounts
insertable = []
for (let i = 0; i < num_entries; i++) {
  insertable.push([randomString(10), randomString(20)])
}
connection.query('INSERT INTO accounts (aEmail, aPassword) VALUES ?', [insertable], (err, res, fields) => {
  if (err) {
    console.log(err)
  }
})

//domains
insertable = []
connection.query('SELECT aId FROM accounts', (err, res, fields) => {
  res.forEach(element => {
    insertable.push([element.aId, randomString(20)])
  });
  connection.query('INSERT INTO domains (aId, dName) VALUES ?', [insertable], (err, res, fields) => {
    if (err) {
      console.log(err)
    }
    do_the_rest();
  })
})

do_the_rest = () => {

  //example of how to insert a point
  //spoiler alert it sucks
  function Point(x, y) {
    this.x = x;
    this.y = y;

    Point.prototype.toSqlString = () => {
      return 'POINT(' + this.x + ',' + this.y + ')';
    }
  }

  generatePoint = () => {
    return new Point(1, 1)
  }

  //nodes
  insertable_nodes = []
  for (let i = 0; i < num_entries; i++) {
    insertable_nodes.push([(Math.random() * 100) | 0, generatePoint(), (Math.random() * 100) | 0])
  }
  connection.query('INSERT INTO nodes (nType, nLocation, nChunk) VALUES ?', [insertable_nodes], (err, res, fields) => {
    if (err) {
      console.log(err)
    }
  })

  //items
  insertable_items = []
  connection.query('SELECT nId FROM nodes', (err, res, fields) => {
    res.forEach(element => {
      insertable_items.push([element.nId, ((Math.random() * 100) | 0), ((Math.random() * 100) | 0)])
    });
    connection.query('INSERT INTO items (nId, iType, iQuantity) VALUES ?', [insertable_items], (err, res, fields) => {
      if (err) {
        console.log(err)
      }
    })
  })

  //vehicles
  insertable_vehicles = []
  for (let i = 0; i < num_entries; i++) {
    insertable_vehicles.push([randomId(), randomId(), randomId()])
  }
  connection.query('INSERT INTO vehicles (nId, dId, vType) VALUES ?', [insertable_vehicles], (err, res, fields) => {
    if (err)
      console.log(err)
  })

  //structures
  insertable_structures = []
  for (let i = 0; i < num_entries; i++) {
    insertable_structures.push([randomId(), randomId(), randomId()])
  }
  connection.query('INSERT IGNORE INTO structures (nId, dId, sType) VALUES ?', [insertable_structures], (err, res, fields) => {
    if (err)
      console.log(err)
  })

  //vehicle_holds
  insertable_vh = []
  for (let i = 0; i < num_entries; i++) {
    insertable_vh.push([randomId(), randomId(), randomId()])
  }
  connection.query('INSERT INTO vehicle_holds (vId, vhAmount, vhType) VALUES ?', [insertable_vh], (err, res, fields) => {
    if (err)
      console.log(err)
  })

  //route_steps
  insertable_rs = []
  for (let i = 0; i < num_entries; i++) {
    insertable_rs.push([randomId(), randomId(), randomId(), randomId(), randomId()])
  }
  connection.query('INSERT IGNORE INTO route_steps (vId, rsStep, rsProgress, rsStartNode, rsEndNode) VALUES ?', [insertable_rs], (err, res, fields) => {
    if (err)
      console.log(err)
  })

  //route_commands
  insertable_rc = []
  for (let i = 0; i < num_entries; i++) {
    insertable_rc.push([randomId(), randomId(), randomId(), randomId()])
  }
  connection.query('INSERT IGNORE INTO route_commands (rsId, rcStep, rcType, rcAmount) VALUES ?', [insertable_rc], (err, res, fields) => {
    if (err)
      console.log(err)
  })
}