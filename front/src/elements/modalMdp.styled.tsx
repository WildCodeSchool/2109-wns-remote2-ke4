import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/styles';
import Button from '@mui/material/Button';

export const ModalForgot = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const PaperModal = styled(Paper)({
  width: '100%',
  maxWidth: '700px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '25px',
});

export const TitleModal = styled(Typography)({
  fontSize: '25px !important',
  fontWeight: 'bold',
  margin: '10px auto !important',
});

export const ButtonSubmit = styled(Button)({
  color: '#fff !important',
  margin: '25px 0px 0px 0px !important',
  padding: '10px 20px',
  background: '#07DFCD !important',
  cursor: 'pointer',
});
