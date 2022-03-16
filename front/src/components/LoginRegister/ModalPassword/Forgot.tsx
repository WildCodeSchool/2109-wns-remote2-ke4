import { useState } from 'react';
import {
  ButtonSubmit,
  ModalForgot,
  PaperModal,
  TitleModal,
} from '../../../elements/modalMdp.styled';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import { useMutation } from '@apollo/client';
import { RESET_MDP } from '../../../graphql/Mutation/Login';

const ModalMdpForgot: React.FC<{ open: boolean; handleClose: () => void }> = ({
  open,
  handleClose,
}) => {
  const [email, setEmail] = useState('');
  const [errEmail, setErrEmail] = useState(false);
  const [resetMdp, { loading }] = useMutation(RESET_MDP);

  function emailIsValid(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const onSubmit = async () => {
    const test = await emailIsValid(email);
    if (!test) {
      setErrEmail(true);
      return;
    }

    await resetMdp({
      variables: {
        email: email,
      },
    });
  };
  return (
    <ModalForgot open={open} onClose={handleClose}>
      <Fade in={open}>
        <PaperModal>
          <TitleModal variant="h6">Réinitialisation du mot de passe</TitleModal>
          <TextField
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrEmail(false);
            }}
            error={errEmail}
            helperText={errEmail ? "L'email entrer n'est pas valide" : ''}
          />
          <ButtonSubmit disabled={loading || !email} onClick={() => onSubmit()}>
            Envoyer
          </ButtonSubmit>
        </PaperModal>
      </Fade>
    </ModalForgot>
  );
};
export default ModalMdpForgot;
