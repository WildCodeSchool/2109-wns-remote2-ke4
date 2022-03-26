import Joi from 'joi';

// @ts-ignore
export const registerUserSchema = (args) => {
  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    mdp: Joi.string()
      .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})'))
      .min(8)
      .max(32)
      .required(),
    description: Joi.string(),
  }).validate(args, { abortEarly: false }).error;
  if (schema) {
    console.log(schema);
    throw new Error('Les données entrer sont incorrect');
  }
};
