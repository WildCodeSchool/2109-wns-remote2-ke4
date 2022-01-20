import { useState } from 'react';
import Typography from '@mui/material/Typography';
import { makeStyles, createStyles } from '@mui/styles';
import AlertTitle from '@mui/material/AlertTitle';
import {
  AlertMessage,
  ButtonCancel,
  ButtonSend,
  TextFieldNewPassword,
} from '../Components/NewPassword';

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
      width: '40%',
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
  })
);
const NewPassword = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  return (
    <div className={classes.container}>
      <Typography variant="inherit" className={classes.title}>
        Retrouver votre compte
      </Typography>
      <Typography variant="inherit" className={classes.subtitle}>
        Veuillez entrer votre adresse e-mail pour rechercher votre compte
      </Typography>
      <div className={classes.line}></div>
      <TextFieldNewPassword
        id="outlined-required"
        label="Email"
        variant="outlined"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <AlertMessage severity="success">
        <AlertTitle>Success</AlertTitle>
        Un mot de passe vous a été envoyer sur <strong>thomas@gmail.com</strong>
      </AlertMessage>
      <div className={classes.containerBtn}>
        <ButtonCancel>Annuler</ButtonCancel>
        <ButtonSend disabled={!email}>Envoyer</ButtonSend>
      </div>
    </div>
  );
};
export default NewPassword;
