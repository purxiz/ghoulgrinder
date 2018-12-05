var express     = require('express');
var router      = express.Router();

var bcrypt      = require('bcrypt');					// for encrypting user passwords

const db = require('./../../server/database')



router.use(function(req, res, next) {

	console.log('\nAPI request has been received ' + req.method + req.url);
	next();

});

//LOGIN
router.route('/authenticate')
  .post(function(req, res) {
    console.log('searching for user ' + req.body.username)
    //let insertable = req.body.username
    
    db.connection.query('SELECT * FROM accounts WHERE aUsername = ?', req.body.username, (err, results, fields) => {
      if (err) {
        console.log("database error")
        return false
      }
      results.forEach(element => {
        console.log('found ' + element.aUsername)

        if (req.body.password == element.aPassword){
          console.log('passwords match')
          res.status(200).json( { message: 'match' } );
        }
        else {
          console.log('passwords do not match')
          res.status(200).json( { message: 'noMatch' } );
        }

      });

    });
});

//REGISTER
router.route('/register')
  .post(function(req, res) { //create a new user
    let insertable = {
      aUsername: req.body.username,
      aPassword: req.body.password,
      aEmail: req.body.email
    }
    userFound = false;

    db.connection.query('SELECT * FROM accounts WHERE aUsername = ?', req.body.username, (err, results, fields) => {
      if (err) {
        console.log("database error")
        return false
      }
      results.forEach(element => {
        userFound = true;
      });
      if(!userFound) {
        console.log('adding user ' + req.body.username + ' to accounts')
        db.connection.query('INSERT INTO accounts SET ?', insertable, (err, res, fields) => {
          if (err) {
            console.log("database error")
            return false
          }
        })
      }
      else {
        res.json( { message: 'username already exists' } );
      }
    });
});
    


module.exports = router;