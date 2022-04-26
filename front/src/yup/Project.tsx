import * as Yup from 'yup';

export const projectSchema = Yup.object().shape({
  title: Yup.string().required('Veuillez rentrer un titre'),
  dateDue: Yup.date().required('Veuillez rentrer une date'),
  societe: Yup.string().required('Veuillez rentrer un nom de societe'),
  time: Yup.string().required('Veuillez rentrer une estimation de temps'),
  optionTime: Yup.string().required('Veuillez rentrer une unité de temps'),

  description: Yup.string(),
});
