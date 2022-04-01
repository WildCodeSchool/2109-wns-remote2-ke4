import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const Form = styled('form')({
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
  cursor: 'pointer !important',
  '&::after': {
    content: `''`,
    display: 'block',
    width: '100%',
    height: '2px',
    background: 'blue',
    position: 'absolute',
    bottom: 1,
    left: 0,
  },
});

export const TypographyPasswordForgot = styled(Typography)(({ theme }) => ({
  position: 'relative',
  cursor: 'pointer !important',
  marginLeft: '10px !important',
  '&::after': {
    content: `''`,
    display: 'block',
    width: '100%',
    height: '2px',
    background: '#000',
    position: 'absolute',
    bottom: 1,
    left: 0,
  },
  [theme.breakpoints.down('xs')]: {
    marginLeft: '0px !important',
  },
}));

export const DivBtn = styled('div')(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('xs')]: {
    display: 'flex',
    flexDirection: 'column',
  },
}));
