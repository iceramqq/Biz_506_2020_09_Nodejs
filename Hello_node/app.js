var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// nodejs서버 생성자
var app = express();

// view engine setup
// __dirname : nodejs 우ㅢ  현재 시스템 폴더
//  임의로 설정하지 않아도 이미 만ㄷ,ㄹ어져서 제공되는 변수
// __main___ 
// c:/bizwork/workspace/nodejs/Hello_node
// __dirname에 저장된 문자열과 view
app.set('views', path.join(__dirname, 'views'));
// view파일 참조 views/*.pug라는 파일을 찾아서 rander
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// resources 폴더처럼
// controller를 거치지 않고 직접 핸들링할 파일들을 
// 저장하는 곳
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);

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
