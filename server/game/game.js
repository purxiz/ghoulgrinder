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
