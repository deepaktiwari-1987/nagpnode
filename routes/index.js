var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(process.env);
  res.send({msg: 'working fine'})
});

module.exports = router;
