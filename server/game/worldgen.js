var SimplexNoise = require('simplex-noise'),
  simplex = new SimplexNoise(5)

var node = require('./world/nodes')
var db = require('./../database')

const chunkSize = 25;

exports.newChunk = (cId) => {

}

function Point(x, y) {
  this.x = x;
  this.y = y;

}

Point.prototype.toSqlString = function () {
  return 'POINT(' + this.x + ',' + this.y + ')';
}

exports.initialGen = () => {
  let insertable = {
    cLocation: new Point(0, 0)
  }
  db.connection.query('INSERT INTO chunks SET ?', insertable, (err, res, fields) => {
    if (err) {
      console.log(err)
      return 0
    }
    let nodes = []
    let cId = res.insertId
    for (let i = 0; i < chunkSize; ++i) {
      for (let j = 0; j < chunkSize; ++j) {
        nodes.push([new Point(i, j), cId, Math.floor(simplex.noise2D(i, j) * 10)])
      }
    }
    node.bulkAddNode(nodes)
  })
}