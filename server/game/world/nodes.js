var node = require('./../../../shared/world/nodes')
var db = require('./../../database')



exports.bulkAddNode = (nodes) => {

  db.connection.query('INSERT INTO nodes (nLocation, cId, nType) VALUES ?', [nodes], (err, res, fields) => {
    if (err) {
      console.log(err)
    }

    for (let i = res.insertId, j = res.affectedRows + res.insertId, k = 0; i < j; ++i, ++k) {
      nodes[k].push(i)
    }
    node.bulkAddNode(nodes)
  })
}