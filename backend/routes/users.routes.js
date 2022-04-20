var express = require('express');
//const sequelize = require('sequelize');
/* GET users listing. */
const Userervice = require('../services/user.service');
const validatorHandler = require('../middlewares/validator.handler');
const { updateUserSchema, createUserSchema, getUserSchema } = require('../schemas/user.schema');

const router = express.Router();
const Userservice = new Userervice();
const {checkApiKey}= require('../middlewares/auth.handler')

router.get('/',checkApiKey, async function(req, res, next) {
    try {
        const users = await service.find();
        res.json(users);
      } catch (error) {
        next(error);
      }
});

router.post('/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newUser = await Userservice.create(body);
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }
);

// app.get('/test', checkApiKey, (req,res)=>{
//   res.send('Testeado');
// })

router.get('/:id', function(req, res, next){
  
});



module.exports = router;

