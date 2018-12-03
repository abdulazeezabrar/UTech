var express = require('express');
var router = express.Router();

var Class = require('../models/class');


/* GET home page. */
router.get('/', function(req, res, next) {
  Class.find({}).limit(3).then(classes => {
    res.render('index', {classes});
  });
});

module.exports = router;
