// a route
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render links to index (or whatever you put in there, like main
  res.render('index', {
    title: 'Express',
    // the reason we can do this? html is just a string
    src: "/images/chin.jpg"
  });
});

//
router.get('/', function(req, res, next) {
  // res.render links to index (or whatever you put in there, like main
  res.render('index', { title: 'Express' });
});

module.exports = router;

// res.render links to index
// going to take data, anything btwn handlebars, interpolate data
