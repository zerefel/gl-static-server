'use strict';
let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let app = express();
const config = require('./config');

// view engine setup
app.set('view engine', 'html');
app.set('view engine', 'html');
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(config.staticFolderDir));

app.get('*', (req, res) => {
console.log(config.staticFolderDir + '/index.html')

    res.sendFile(config.staticFolderDir + '/index.html');
});

// catch 404 and forward to error handler
app.use((req, res, next) =>  {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.end();
});

module.exports = app;
