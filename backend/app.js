var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users.routes');
var authRouter = require('./routes/auth.routes');

var app = express();

const cors = require('cors');

const { ppid } = require('process');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


require('./utils/passport/index');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);




module.exports = app;
