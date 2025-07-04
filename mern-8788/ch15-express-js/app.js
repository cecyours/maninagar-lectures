var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var clientRoutes = require('./routes/client')
var custumerRoutes = require('./routes/custumer');
const { default: mongoose } = require('mongoose');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/client', clientRoutes)
app.use('/custumer', custumerRoutes)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log(" Hey, Connection Done"))
  .catch((err) => console.log(" No Connection Found", err));
// error handler


app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
