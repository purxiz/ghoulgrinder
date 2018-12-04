var express     = require('express');
var router      = express.Router();

var bcrypt      = require('bcrypt');					// for encrypting user passwords

const db = require('./../../server/database')

router.use(function(req, res, next) {

	console.log('API request has been received ' + req.method + req.url);
	next();

});
router.route('/register')
  .post(function(req, res) { //create a new user

    console.log('adding user ' + typeof(req.body.username) + ' to accounts')
    let insertable = {
      aUsername: req.body.username,
      aPassword: req.body.password,
      aEmail: req.body.email
    }
  
    db.connection.query('INSERT INTO accounts SET ?', insertable, (err, res, fields) => {
      if (err) {
        console.log(err)
        return false
      }
      //structure_list.set(res.insertId, new Structure(nId, dId, sType))
    })
    res.json( { message: 'user created' } );
		});

module.exports = router;