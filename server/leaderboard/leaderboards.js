const db = require('./../database')

//leaderboards on various topics

//vehicle count
db.connection.query('SELECT dName, COUNT(*) as vehicle_count FROM domains, vehicles WHERE domains.dId = vehicles.dId GROUP BY domains.dId ORDER BY COUNT(*) LIMIT 500', (err, res, fields) => {

})

//structure count
db.connection.query('SELECT dName, COUNT(*) as structure_count FROM domains, structures WHERE domains.dId = structures.dId GROUP BY domains.dId ORDER BY COUNT(*) LIMIT 500', (err, res, fields) => {

})

//items on nodes with owned structures
db.connection.query('SELECT dName, SUM(iQuantity) FROM domains, structures, items WHERE domains.dId = structures.dId and items.nId = structures.nId GROUP BY domains.dId ORDER BY COUNT(*) LIMIT 500', (err, res, fields) => {

})