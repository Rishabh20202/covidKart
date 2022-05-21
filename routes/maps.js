var express = require('express');
var router = express.Router();


/*
 * GET locator
 */
router.get('/locator', function (req, res) {

    res.render('maps1', {
        title: 'Hospital Locator'
    });

});

/*
 * POST locator
 */
router.post('/locator', function (req, res) {

    var lati = parseFloat(req.body.latitude);
    var longi = parseFloat(req.body.longitude);
    res.render('maps', {
      
      lati: lati,
      longi: longi
    });
});

module.exports = router;
