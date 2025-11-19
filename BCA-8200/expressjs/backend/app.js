var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require('dotenv')
const cors = require('cors')


dotenv.config()

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var categoryRouter = require('./routes/category')
var productRouter = require('./routes/product')
const { default: mongoose } = require('mongoose');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');



// this will allow given port only
app.use(cors({
  origin: process.env.ALLOWED_ORIGIN,
  methods: ['POST', 'GET', 'PUT', 'DELETE'],
  credentials: true
}))



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/categories', categoryRouter)
app.use('/products', productRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


mongoose.connect(process.env.MONGODB_URI).then(() => console.log("✅ Mongodb Connected Successfully")).catch((err) => console.log("Connection Faild", err)
)


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
