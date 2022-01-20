import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
export const TextFieldNewPassword = styled(TextField)(({ theme }) => ({
  width: '50%',
  margin: '80px auto 30px auto!important',
  [theme.breakpoints.down('md')]: {
    width: '80%',
  },
}));

export const AlertMessage = styled(Alert)(({ theme }) => ({
  width: '50%',
  [theme.breakpoints.down('md')]: {
    width: '80%',
  },
}));

export const ButtonCancel = styled(Button)(() => ({
  padding: '10px 20px',
  background: '#fff',
  fontWeight: 'bold',
  fontSize: '17px',
  color: '#000',
  boxShadow: '0px 0px 10px 1px #000000',
}));

export const ButtonSend = styled(Button)(() => ({
  padding: '10px 20px',
  background: '#07DFCD',
  fontWeight: 'bold',
  fontSize: '17px',
  color: '#FFF',
  boxShadow: '0px 0px 10px 1px #000000',
}));
