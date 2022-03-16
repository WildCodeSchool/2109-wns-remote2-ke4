import { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputPassword from './InputPassword';
import { useFormik } from 'formik';
import { useMutation } from '@apollo/client';
import { ButtonStyled, Form } from '../../elements/registerlogin.styled';
import { registerSchema } from '../../yup/Register';
import {
  REGISTER_USER,
  ValuesRegisterUser,
} from '../../graphql/Mutation/RegisterUser';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';

const RegisterForm: React.FC<{ handleUrlPage: (str: string) => void }> = ({
  handleUrlPage,
}) => {
  const history = useHistory();
  const [showPasswordOne, setShowPasswordOne] = useState(false);
  const [showPasswordTwo, setShowPasswordTwo] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setCookie] = useCookies(['token']);
  const [registerUser, { loading, error }] = useMutation(REGISTER_USER);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = async (values: ValuesRegisterUser) => {
    const { data } = await registerUser({
      variables: {
        firstName: values.firstName,
        name: values.name,
        email: values.email,
        mdp: values.mdp,
        description: values.description,
      },
    });
    const token = data?.token;
    setCookie('token', token);
    handleUrlPage('/');
    history.push('/');
  };
  const formik = useFormik({
    initialValues: {
      firstName: '',
      name: '',
      email: '',
      mdp: '',
      mdp2: '',
      description: '',
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const handleChange = (key: string, newValue: any) => {
    formik.setValues({
      ...formik.values,
      [key]: newValue,
    });
  };
  if (error) {
    console.log('ERROR -->', error.message);
  }

  return (
    <Form
      onSubmit={(e) => {
        formik.handleSubmit(e);
      }}
    >
      <Grid container spacing={1} style={{ padding: '0px 40px' }}>
        <Grid item md={6} sm={12} xs={12}>
          <TextField
            id="outlined-required"
            fullWidth
            label="Prenom"
            name="firstName"
            variant="outlined"
            margin="normal"
            value={formik.values.firstName}
            onChange={(e) => handleChange('firstName', e.target.value)}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <TextField
            id="outlined-required"
            fullWidth
            label="Nom"
            name="name"
            variant="outlined"
            margin="normal"
            value={formik.values.name}
            onChange={(e) => handleChange('name', e.target.value)}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <TextField
            id="outlined-required"
            fullWidth
            label="Email"
            name="email"
            variant="outlined"
            margin="normal"
            value={formik.values.email}
            onChange={(e) => handleChange('email', e.target.value)}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <InputPassword
            label="Mot de passe"
            state={showPasswordOne}
            onChangeView={setShowPasswordOne}
            value={formik.values.mdp}
            onChange={(e: any) => handleChange('mdp', e.target.value)}
            name="mdp"
            error={formik.touched.mdp && Boolean(formik.errors.mdp)}
            helperText={formik.touched.mdp && formik.errors.mdp}
          />
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <InputPassword
            label="Confirmer"
            state={showPasswordTwo}
            onChangeView={setShowPasswordTwo}
            value={formik.values.mdp2}
            onChange={(e: any) => handleChange('mdp2', e.target.value)}
            name="mdp2"
            error={formik.touched.mdp2 && Boolean(formik.errors.mdp2)}
            helperText={formik.touched.mdp2 && formik.errors.mdp2}
          />
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <TextField
            fullWidth
            id="outlined-multiline-static"
            label="Description"
            name="description"
            value={formik.values.description}
            onChange={(e) => handleChange('description', e.target.value)}
            multiline
            rows={2}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
          />
        </Grid>
      </Grid>

      <ButtonStyled type="submit" disabled={loading}>
        S'enrengister
      </ButtonStyled>
    </Form>
  );
};
export default RegisterForm;
