var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/countries', function(req, res, next) {
    res.render('countries', { title: 'список країн' });
});

router.get('/tours', function(req, res, next) {
    res.render('tours', { title: 'список турів' });
});
router.get('/contacts', function(req, res, next) {
    res.render('contacts', { title: 'контакти' });
});
module.exports = router;