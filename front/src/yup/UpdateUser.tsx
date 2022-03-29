import * as Yup from 'yup';

export const updateUserSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(1, 'Veuillez rentrer un prénom correct')
    .required('Veuillez rentrer un prénom'),
  lastName: Yup.string()
    .min(1, 'Veuillez rentrer un nom correct')
    .required('Veuillez rentrer un nom'),
  pseudo: Yup.string().required('Veuillez rentrer un pseudo'),
  email: Yup.string()
    .email('Veuillez rentrer un email valide')
    .required('Veuillez rentrer un email'),

  description: Yup.string(),
});
