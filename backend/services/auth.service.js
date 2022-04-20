const boom = require('@hapi/boom');
const UserService = require('./user.service') 
const service = new  UserService();
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const {config} = require('../config/config')

class AuthService {
    async getUser(email, password){
        const user = await service.findByEmail(email);
        if (!user) {
          throw boom.unauthorized();
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw boom.unauthorized();
        }
        delete user.dataValues.password;
        return user;
    }

    signToken(user){
        const user = req.user;
        const payload = {
          sub: 1,
          role: "customer",
        };
        const token = jwt.sign(payload, config.jwtSecret);
        return{ user, token };
    }

   async mail(mail){
        const user = await service.findByEmail(email);
        if (!user) {
        throw boom.unauthorized();
        }
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            secure:true,
            port: 465,
            auth: {
                user: config.mail,
                pass: config.passmail
            }
        });
        await transporter.sendMail({
            from: '"Fred Foo 👻" <a.reygadas.g@gmail.com>', 
            to: `${user.mail}`, 
            subject: "Hello ✔ Tu", 
            text: "Hello Pato", 
            html: "<b>Hello world?</b>", 
          });
          return{message:'mail sent'}
    }
}

module.exports = AuthService;
