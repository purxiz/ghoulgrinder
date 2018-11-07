var express = require('express')
const app = express()
const port = 3000

var mysql = require('mysql')
var connection = mysql.createConnection({
	socketPath	: '/var/run/mysqld/mysqld.sock',
	user		: 'ghoulgrinder',
	password 	: 'dev_secret',
	database 	: 'ghoulgrinder'
})

connection.connect(function(err) {
  if (err) {
    console.error(err.stack)
    return;
  }

  console.log('connected as id ' + connection.threadId);
});



app.get('/', (req, res) => res.send("Hello World"))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
