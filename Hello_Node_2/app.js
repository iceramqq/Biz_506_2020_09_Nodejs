/**
 * nodejs에서 기본으로 제공하는 모듈
 * 필요에 따라 npm install 을 한 모듈
 * 이러한 모듈을 사용하기 위해서 require()를 이용하여
 */

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var homeRouter = require('./routes/home');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// 어떤 모듈을 사용하기 위하여 import를 수행한 후 
// 서버에 모듈을 연결하는 절차가 필요하다.
// express서버는 app.use() 라는 함수를 사용하여
// 서버에서 import한 모듈을 사용할수 있도록 설정한다.
// 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// localhost:3000/home/* 의
app.use('/home', homeRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
