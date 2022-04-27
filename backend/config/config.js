require('dotenv').config();

const config = {

    env: process.env.NODE_ENV || 'dev',
    isProd: process.env.NODE_ENV === 'production',
    port: process.env.PORT || 3003,
   
    portdb:process.env.DB_PORT,
    host:process.env.DB_HOST,
    database:process.env.DB_DATABASE,
    user:process.env.DB_USER,
    pass:process.env.DB_PASS,

    apiKey:process.env.APYKEY,
    jwtSecret:process.env.JWT_SECRET,

    passmail:process.env.PASSMAIL,
    mail:process.env.MAIL
}

module.exports = { config };


