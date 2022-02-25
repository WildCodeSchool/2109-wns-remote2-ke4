import { styled } from '@mui/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const FormRegister = styled('form')({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  flexDirection: 'column',
});

export const ButtonStyled = styled(Button)({
  color: '#fff !important',
  margin: '25px 0px !important',
  padding: '10px 20px',
  background: '#07DFCD !important',
});

export const TypographyStyled = styled(Typography)({
  color: 'blue',
  position: 'relative',
  cursor: 'pointer',
  '&::after': {
    content: `''`,
    display: 'block',
    width: '100%',
    height: '2px',
    background: 'blue',
    position: 'absolute',
    bottom: 5,
    left: 0,
  },
});
