import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import background from '../assets/images/background.jpg';
import Avatar from '@mui/material/Avatar';
import CancelIcon from '@mui/icons-material/Cancel';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export const GridLeft = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px 0px',
}));

export const GridRight = styled(Grid)(({ theme }) => ({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const GridOne = styled(Grid)(() => ({
  width: '70%',
}));

export const GridMargin = styled(Grid)(() => ({
  width: '70%',
  marginBottom: '30px',
}));

export const Title = styled(Typography)(() => ({
  margin: '25px 0px',
}));

export const GridAvatar = styled(Avatar)(() => ({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '40px',
}));

export const BoxAvatarDev = styled(Box)(() => ({
  display: 'flex',
  margin: '20px 0px',
}));

export const AvatarDiv = styled(Avatar)(() => ({
  height: '50px',
  width: '50px',
  borderRadius: '50%',
  position: 'relative',
  marginLeft: '15px',
  cursor: 'pointer',
  zIndex: 2,
  backgroundSize: 'cover!important',
  backgroundPosition: 'center!important',
  overflow: 'visible',
}));

export const BoxContainer = styled(Box)(() => ({
  background: `url(${background})`,
  width: '100%',
  minHeight: '100vh',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  justifyContent: 'center',
}));

export const ButtonDev = styled(Button)(() => ({
  background: '#07DFCD',
  color: '#fff',
  margin: '25px 0px',
  padding: '10px 10px',
}));

export const ButtonCreate = styled(Button)(() => ({
  background: '#07DFCD',
  color: '#fff',
  padding: '10px 10px',
}));

export const Cancel = styled(CancelIcon)(() => ({
  position: 'absolute',
  top: -5,
  right: 0,
  height: '20px',
  width: '20px',
  color: '#000',
  zIndex: 3,
}));

export const Input = styled(TextField)(() => ({
  width: '100%',
}));
