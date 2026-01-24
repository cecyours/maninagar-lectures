var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const multer = require('multer');
const mongoose = require('mongoose');

dotenv.config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var categoryRouter = require('./routes/category');
var productRouter = require('./routes/product');
var todosRouter = require('./routes/todos');




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// this will allow given port only
app.use(cors({
  origin: process.env.ALLOWED_ORIGIN,
  methods: ['POST', 'GET', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(logger('dev'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/categories', categoryRouter);
app.use('/products', productRouter);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/todos', todosRouter);



// error handler
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({
      success: false,
      message: err.message
    });
  }

  if (err) {
    console.error('❌ Error:', err);
    return res.status(500).json({
      success: false,
      message: err.message || 'Internal Server Error'
    });
  }

  next();
});

app.use(function (req, res, next) {
  next(createError(404));
});

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch(err => console.log(" MongoDB Connection Failed", err));

module.exports = app;
