var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users.routes');
var authRouter = require('./routes/auth.routes');

var app = express();



const { ppid } = require('process');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())


require('./utils/passport/index');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);




module.exports = app;
