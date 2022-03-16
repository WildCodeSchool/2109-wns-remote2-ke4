import { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputPassword from './InputPassword';
import { styled } from '@mui/material/styles';
import { ButtonStyled, Form } from '../../elements/registerlogin.styled';
import { useFormik } from 'formik';
import { loginSchema } from '../../yup/Login';
import { useMutation } from '@apollo/client';
import { LOGIN_USER, ValuesLoginUser } from '../../graphql/Mutation/Login';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';

const GridContainer = styled(Grid)(({ theme }) => ({
  padding: '0px 100px',
  marginBottom: '25px',
  [theme.breakpoints.down('sm')]: {
    padding: '0px 20px!important',
  },
}));

const LoginForm: React.FC<{ handleUrlPage: (str: string) => void }> = ({
  handleUrlPage,
}) => {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setCookie] = useCookies(['token']);
  const [login, { loading, error }] = useMutation(LOGIN_USER);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = async (values: ValuesLoginUser) => {
    const { data } = await login({
      variables: {
        email: values.email,
        mdp: values.mdp,
      },
    });
    const token = data?.token;
    setCookie('token', token);
    handleUrlPage('/');
    history.push('/');
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      mdp: '',
    },
    validationSchema: loginSchema,
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
      <GridContainer container spacing={4}>
        <Grid item sm={12} md={12} xs={12}>
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
        <Grid item sm={12} md={12} xs={12}>
          <InputPassword
            label="Mot de passe"
            name="mdp"
            state={showPassword}
            onChangeView={setShowPassword}
            value={formik.values.mdp}
            onChange={(e: any) => handleChange('mdp', e.target.value)}
            error={formik.touched.mdp && Boolean(formik.errors.mdp)}
            helperText={formik.touched.mdp && formik.errors.mdp}
          />
        </Grid>
      </GridContainer>

      <ButtonStyled type="submit" disabled={loading}>
        Se connecter
      </ButtonStyled>
    </Form>
  );
};
export default LoginForm;
