var createError = require('http-errors');
var express = require('express');



// cors added
var cors = require('cors')



var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var blogRouter = require('./routes/blogs');
const { default: mongoose } = require('mongoose');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));


// cors added
const allowedOrigins = ['http://localhost:3000'];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      return callback(new Error('Not allowed by CORS'), false);
    }
    callback(null, true);
  }
}))



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/blogs', blogRouter)




mongoose.connect('mongodb+srv://mern1234:asdasd@mern-1234.bfblx64.mongodb.net/?retryWrites=true&w=majority&appName=MERN-1234').then(() => {
  console.log("Connection Succesful");
}).catch((err) => {
  console.log("Connection faild", err)
})


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

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



// connection string 
// mongodb+srv://mern1234:asdasd@mern-1234.bfblx64.mongodb.net/?retryWrites=true&w=majority&appName=MERN-1234