import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const FormUpdatePassword = styled('form')({
  width: '100%',
  maxWidth: '900px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0px 20px',
});

export const TypographyPasswordForgot = styled(Typography)(({ theme }) => ({
  position: 'relative',
  cursor: 'pointer !important',
  marginTop: '20px !important',
  color: '#07DFCD',
  '&::after': {
    content: `''`,
    display: 'block',
    width: '100%',
    height: '2px',
    background: '#07DFCD',
    position: 'absolute',
    bottom: 1,
    left: 0,
  },
  [theme.breakpoints.down('xs')]: {
    marginLeft: '0px !important',
  },
}));
