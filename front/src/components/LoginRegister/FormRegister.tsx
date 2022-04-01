import { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputPassword from './InputPassword';
import { useFormik } from 'formik';
import { ButtonStyled, Form } from '../../elements/registerlogin.styled';
import { registerSchema } from '../../yup/Register';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useCreateUserMutation } from '../../graphql/Mutation/User/User.mutation';

interface PropsValues {
  firstName: string;
  lastName: string;
  email: string;
  mdp: string;
  description: string;
  pseudo: string;
}

const RegisterForm = () => {
  const history = useHistory();
  const [showPasswordOne, setShowPasswordOne] = useState(false);
  const [showPasswordTwo, setShowPasswordTwo] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setCookie] = useCookies(['token']);
  const [registerUser, { loading }] = useCreateUserMutation({
    onCompleted: (data) => {
      const token = data?.registerUser;

      setCookie('token', token);

      window.location.replace('/ke4');
    },
    onError: (err) => toast.error(err.message),
  });

  const onSubmit = async (values: PropsValues) => {
    await registerUser({
      variables: {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        mdp: values.mdp,
        description: values.description,
        pseudo: values.pseudo,
      },
    });
  };
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      mdp: '',
      mdp2: '',
      description: '',
      pseudo: '',
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });
  const handleChange = (key: string, newValue: any) => {
    formik.setValues({
      ...formik.values,
      [key]: newValue,
    });
  };

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
            name="lastName"
            variant="outlined"
            margin="normal"
            value={formik.values.lastName}
            onChange={(e) => handleChange('lastName', e.target.value)}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <TextField
            id="outlined-required"
            fullWidth
            label="Pseudo"
            name="pseudo"
            variant="outlined"
            margin="normal"
            value={formik.values.pseudo}
            onChange={(e) => handleChange('pseudo', e.target.value)}
            error={formik.touched.pseudo && Boolean(formik.errors.pseudo)}
            helperText={formik.touched.pseudo && formik.errors.pseudo}
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
