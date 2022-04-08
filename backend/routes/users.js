var express = require('express');
//const sequelize = require('sequelize');
/* GET users listing. */
const Userervice = require('./../services/user.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { updateUserSchema, createUserSchema, getUserSchema } = require('./../schemas/user.schema');

const router = express.Router();
const service = new Userervice();

router.get('/', async function(req, res, next) {
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
      const newCategory = await service.create(body);
      res.status(201).json(newCategory);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/:id', function(req, res, next){
  
});



module.exports = router;

