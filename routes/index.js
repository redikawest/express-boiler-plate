const express   = require('express');
const router    = express.Router();

router.use('/v1', function (req, res, next) {

    next();

}, require('./v1')

);


module.exports = router;