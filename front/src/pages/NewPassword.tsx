import { useState } from 'react';
import Typography from '@mui/material/Typography';
import { makeStyles, createStyles } from '@mui/styles';
import {
  ButtonCancel,
  ButtonSend,
  TextFieldNewPassword,
} from '../elements/newPassword.styles';
import { useMutationForgotPassword } from '../graphql/Mutation/User';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';

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
const NewPassword: React.FC<{ handleUrlPage: (str: string) => void }> = ({
  handleUrlPage,
}) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const history = useHistory();
  const [resetMdp, { loading }] = useMutationForgotPassword({
    onCompleted: () => {
      toast.success(
        `Un email vous a été envoyer à ${email} pour la réinitialisation de votre mot de passe`
      );
      setTimeout(() => {
        handleUrlPage('/login');
        history.push('/login');
      }, 4000);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const onSubmit = async () => {
    await resetMdp({
      variables: {
        email,
      },
    });
  };
  return (
    <div className={classes.container}>
      <Typography variant="inherit" className={classes.title}>
        Réinitialisation du mot de passe
      </Typography>
      <Typography variant="inherit" className={classes.subtitle}>
        Veuillez entrer votre adresse e-mail pour poursuivre la procédure
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
      <div className={classes.containerBtn}>
        <ButtonCancel
          disabled={loading}
          onClick={() => {
            handleUrlPage('/login');
            history.push('/login');
          }}
        >
          Annuler
        </ButtonCancel>
        <ButtonSend disabled={!email || loading} onClick={() => onSubmit()}>
          Envoyer
        </ButtonSend>
      </div>
    </div>
  );
};
export default NewPassword;
