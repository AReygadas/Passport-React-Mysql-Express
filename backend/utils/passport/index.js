const passport = require('passport');

const LocalStartegy = require('./strategies/local.strategy');
const JwtStartegy = require('./strategies/jwt.strategy');

passport.use(LocalStartegy);
passport.use(JwtStartegy);