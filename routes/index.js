var express = require('express');
var router = express.Router();
const db = require('../config/sequelize.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(process.env);
  res.send({msg: 'working fine'})
});

router.get('/get-all-employees', async function(__req, res, __next) {
  const result = await db.employee.findAll();
  res.send(result)
})

module.exports = router;
