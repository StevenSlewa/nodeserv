var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.send("hi");
  res.json({"book":"sent"});
});

module.exports = router;
