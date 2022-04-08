const Joi = require('joi');

const id = Joi.number().integer();
const mail = Joi.string().email();
const password = Joi.string().min(8);
// const role = Joi.string().min(5)

const createUserSchema = Joi.object({
  mail: mail.required(),
  password: password.required(),
  // role: role.required()
});

const updateUserSchema = Joi.object({
  mail: mail,
  // role: role,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }
