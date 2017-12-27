var express = require('express');
var router = express.Router();
var db = require("../../mysql.js");

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get("/api/users", function(req, res, next) {
  var users = db.query('SELECT * from users', function (error, results, fields) {
    if (error) throw error;
    console.log(results);
    res.status(200).json(results);
  // }).then((users) => {
  // res.status(200).json(users);
  })


})

module.exports = router;
