import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(1, 'Veuillez rentrer un prénom correct')
    .required('Veuillez rentrer un prénom'),
  name: Yup.string()
    .min(1, 'Veuillez rentrer un nom correct')
    .required('Veuillez rentrer un nom'),
  email: Yup.string()
    .email('Veuillez rentrer un email valide')
    .required('Veuillez rentrer un email'),
  mdp: Yup.string()
    .min(8, 'Le mot de passe doit contenir au minimum 8 caractères')
    .max(32, 'Le mot de passe doit contenir au maximum 32 caractères')
    .matches(
      new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})'),
      'Le mot de passe contenir une majuscule et un chiffre'
    )
    .required('Veuillez rentrer un mot de passe'),
  mdp2: Yup.string().oneOf([Yup.ref('mdp'), null], 'Mots de passe différents'),

  description: Yup.string(),
});
