var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	var date = new Date(Date.now()).getFullYear();
	res.render('index', {year: date, age: date-1995});
});

module.exports = router;
