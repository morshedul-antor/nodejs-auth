const Joi = require("joi");

const roleSchema = Joi.object({
  name: Joi.string().min(3),
});

module.exports = roleSchema;
