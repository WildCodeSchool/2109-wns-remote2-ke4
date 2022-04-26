import Joi from 'joi';

// @ts-ignore
export const registerUserSchema = (args) => {
  const schema = Joi.object({
    firstName: Joi.string().required().messages({
      'string.empty': 'Veuillez entrer votre prénom',
      'string.min': 'Veuillez entrer votre prénom',
    }),
    lastName: Joi.string().required().messages({
      'string.empty': 'Veuillez entrer votre nom',
      'string.min': 'Veuillez entrer votre nom',
    }),
    email: Joi.string().email().required().messages({
      'string.empty': 'Veuillez entrer votre email',
      'string.email': 'Veuillez entrer un email valide',
    }),
    pseudo: Joi.string().required().messages({
      'string.empty': 'Veuillez entrer votre pseudo',
      'string.min': 'Veuillez entrer votre pseudo',
    }),
    mdp: Joi.string()
      .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})'))
      .min(8)
      .max(32)
      .required()
      .messages({
        'string.empty': 'Veuillez entrer votre mot de passe',

        'string.pattern.base':
          'Veuillez entrer votre mot de passe de minimun 8 caractères, une majuscule, une minuscule et un chiffre',
      }),
    description: Joi.string(),
  }).validate(args, { abortEarly: true }).error;
  if (schema) {
    throw new Error(schema.message);
  }
};
