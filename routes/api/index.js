var router = require('express').Router();

// Course api router
router.use('/course', require('./course'));

module.exports = router;
