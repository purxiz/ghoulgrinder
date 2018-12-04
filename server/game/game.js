const db = require('./../database')

//increment progress for 1 for all currently active route steps
//game will handle removing route_steps that are past their prime
db.connection.query('UPDATE route_steps r1, (SELECT rsId, MIN(rsStep) as mini FROM route_steps GROUP BY rsId) as mino SET rsProgress = rsProgress + 1 WHERE r1.rsId = mino.rsId AND r1.rsStep = mino.mini', (err, res, fields) => {

})
//TODO: implement deletable object
db.connection.query('DELETE FROM route_steps WHERE IN ?', deletable, (err, res, fields) => {
  
})