const Joi = require("joi");

const userSchema = Joi.object({
  name: Joi.string().min(3),
  phone: Joi.string(),
  email: Joi.string(),
  password: Joi.string().required(),
});

module.exports = userSchema;
