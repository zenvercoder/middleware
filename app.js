var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// routes (app.use('/', routes);) is coming from routes/index
var routes = require('./routes/index');
var users = require('./routes/users');

// create our express app
var app = express();

// view engine setup
// setup handlebars templates
// __dirname is a node global
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// a bunch of middlewares
// set up logger, this will log stuff
app.use(logger('dev'));
// set up parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// look for the public folder, anything that matches this path that exists inside public folder, just serve that as a file. Just serves the image and expresses it.
app.use(express.static(path.join(__dirname, 'public')));

// mount our two routes
app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler diff error if env not development
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;


// stylesheets is called by layout.hbs
// when are we actually listening to app. package.json, it's not running
// in bin, we get port, creating a node server, passing a middleware in, listen on port, extra error handling
// triple handlebar = interpolate another page inside of it. Whatever you render goes inside of this layout

// behind the scenes, angular uses something like handlebars. render once, display once. angular render for every change that might happen in real time

// this is kind of like rails. more generally for your apis. we will take out the public part and views, then two servers for front end, back end.

// if you want two layouts, write a custom render function

// first request was '/'
// second request was ...
