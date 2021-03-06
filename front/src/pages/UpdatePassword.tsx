import { useState } from 'react';
import Typography from '@mui/material/Typography';
import { makeStyles, createStyles } from '@mui/styles';
import { ButtonCancel, ButtonSend } from '../elements/newPassword.styles';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import InputPassword from '../components/LoginRegister/InputPassword';
import { useFormik } from 'formik';
import { passwordSchema } from '../yup/Password';
import { TypographyPasswordForgot } from '../elements/updatepassword.styled';
import { FormUpdatePassword } from '../elements/updatepassword.styled';
import toast from 'react-hot-toast';
import { useResetPasswordViewerMutation } from '../graphql/Mutation/User/User.mutation';

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
const NewPassword = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const classes = useStyles();
  const navigate = useNavigate();
  const [updatePassword, { loading, error }] = useResetPasswordViewerMutation();

  const onSubmit = async (values: any) => {
    await updatePassword({
      variables: {
        oldPassword: values.oldPassword,
        newMdp: values.newPassword,
      },
      onCompleted: () => {
        toast.success(
          'La mise à jour de votre mot de passe à bien été prise en compte'
        );
      },
      onError: (err) => toast.error(err.message),
    });
  };

  const formik = useFormik({
    initialValues: {
      oldPassword: '',
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
      <FormUpdatePassword
        onSubmit={(e) => {
          formik.handleSubmit(e);
        }}
      >
        <Typography variant="inherit" className={classes.title}>
          Mise à jour du mot de passe
        </Typography>
        <div className={classes.line}></div>
        <Grid container className={classes.grid}>
          <Grid item xs={12}>
            <InputPassword
              label="Ancien mot de passe"
              name="oldPassword"
              state={showPassword}
              onChangeView={setShowPassword}
              value={formik.values.oldPassword}
              onChange={(e: any) => handleChange('oldPassword', e.target.value)}
              error={!!error}
              helperText={error?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <InputPassword
              label="Nouveau mot de passe"
              name="newPassword"
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

        <div className={classes.containerBtn}>
          <ButtonCancel
            onClick={() => {
              navigate('/updateprofil');
            }}
          >
            Annuler
          </ButtonCancel>
          <ButtonSend type="submit" disabled={loading}>
            Modifier
          </ButtonSend>
        </div>
        <TypographyPasswordForgot
          variant="h6"
          onClick={() => {
            navigate('/newpassword');
          }}
        >
          Mot de passe oublier ?
        </TypographyPasswordForgot>
      </FormUpdatePassword>
    </div>
  );
};
export default NewPassword;
