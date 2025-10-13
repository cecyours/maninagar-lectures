var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

<<<<<<< HEAD
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var welcomeRouter = require('./routes/welcome')
=======

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
>>>>>>> b330280aaa865a04139e67a3c6476726038afd52

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
<<<<<<< HEAD
app.use('/welcome', welcomeRouter);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
=======
app.use('/sania', indexRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
>>>>>>> b330280aaa865a04139e67a3c6476726038afd52
  next(createError(404));
});

// error handler
<<<<<<< HEAD
app.use(function (err, req, res, next) {
=======
app.use(function(err, req, res, next) {
>>>>>>> b330280aaa865a04139e67a3c6476726038afd52
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
