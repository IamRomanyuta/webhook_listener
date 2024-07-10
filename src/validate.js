const Joi = require('joi');

const schema = Joi.object({
  name: Joi.string().required(),
  value: Joi.string().required()
});

function validateData(data) {
  return schema.validate(data);
}

module.exports = validateData;
