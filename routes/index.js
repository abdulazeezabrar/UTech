var express = require('express');
var router = express.Router();


// This api ping for testing
router.get('/api/ping', function(req, res, next) {
  res.send({"Hello ": 'world!'});
});

module.exports = router;
