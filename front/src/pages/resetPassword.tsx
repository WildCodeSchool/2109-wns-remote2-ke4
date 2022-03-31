import { useState } from 'react';
import Typography from '@mui/material/Typography';
import { makeStyles, createStyles } from '@mui/styles';
import { useHistory, useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import InputPassword from '../components/LoginRegister/InputPassword';
import { useFormik } from 'formik';
import { useMutationResetPassword } from '../graphql/Mutation/User';
import { FormUpdatePassword } from '../elements/updatepassword.styled';
import { passwordSchema } from '../yup/Password';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import toast from 'react-hot-toast';

export const BTN = styled(Button)({
  padding: '10px 20px',
  background: '#07DFCD',
  fontWeight: 'bold',
  fontSize: '17px',
  color: '#FFF',
  boxShadow: '0px 0px 10px 1px #000000',
  marginTop: '14px',
  cursor: 'pointer',
  '&:hover': {
    background: '#07DFCD',
  },
});

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      width: '100%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    },
    title: {
      margin: '80px 0px 30px 0px!important',
      fontSize: '60px',
      fontWeight: 'bold',
      textAlign: 'center',
    },

    subtitle: {
      margin: '0px 0px 30px 0px!important',
      fontSize: '30px',
      textAlign: 'center',
    },

    line: {
      width: '80%',
      height: '1px',
      background: '#000',
      opacity: 0.3,
    },
    containerBtn: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '25%',
      minWidth: '300px',
      marginTop: '45px',
    },
    grid: {
      marginTop: '30px',
      padding: '0px 20px',
    },
  })
);
const ResetPassword: React.FC<{ viewer: any }> = ({ viewer }, props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const classes = useStyles();
  const history = useHistory();
  const [resetPassword, { loading }] = useMutationResetPassword();
  const params: { token: string } = useParams();

  const onSubmit = async (values: any) => {
    await resetPassword({
      variables: {
        newMdp: values.newPassword,
        tokenURL: params.token,
      },
      onCompleted: () => {
        toast.success(
          'La mise à jour de votre mot de passe à bien été prise en compte'
        );

        setTimeout(() => {
          viewer ? history.push('/ke4') : history.push('/login');
        }, 4000);
      },
      onError: (err) => toast.error(err.message),
    });
  };

  const formik = useFormik({
    initialValues: {
      newPassword: '',
      confirmPassword: '',
    },
    validationSchema: passwordSchema,
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
    <div className={classes.container}>
      <FormUpdatePassword onSubmit={formik.handleSubmit}>
        <Typography variant="inherit" className={classes.title}>
          Initialisation du nouveau mot de passe
        </Typography>
        <div className={classes.line}></div>
        <Grid container className={classes.grid}>
          <Grid item xs={12}>
            <InputPassword
              label="Nouveau mot de passe"
              name="ResetPassword"
              state={showPassword}
              onChangeView={setShowPassword}
              value={formik.values.newPassword}
              onChange={(e: any) => handleChange('newPassword', e.target.value)}
              error={
                formik.touched.newPassword && Boolean(formik.errors.newPassword)
              }
              helperText={
                formik.touched.newPassword && formik.errors.newPassword
              }
            />
          </Grid>
          <Grid item xs={12}>
            <InputPassword
              label="Confirmer nouveau mot de passe"
              name="confirmPassword"
              state={showPassword}
              onChangeView={setShowPassword}
              value={formik.values.confirmPassword}
              onChange={(e: any) =>
                handleChange('confirmPassword', e.target.value)
              }
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
              helperText={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
            />
          </Grid>
        </Grid>

        <BTN type="submit" disabled={loading}>
          Sauvegarder
        </BTN>
      </FormUpdatePassword>
    </div>
  );
};
export default ResetPassword;
