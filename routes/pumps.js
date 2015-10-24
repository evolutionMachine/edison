var express = require('express');
var router = express.Router();

var Cylon = require('Cylon');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('pumps',
        {
            pump1Enabled:false,
            pump2Enabled:false,
            pump3Enabled:false });
});

module.exports = router;
