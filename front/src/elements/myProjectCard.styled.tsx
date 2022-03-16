import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const Card = styled(Box)({
  width: '100%',
  height: '100%',
  maxWidth: '350px',
  maxHeight: '350px',
  overflow: 'hidden',
  border: '1px solid #000',
  borderRadius: '15px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#fff',
  padding: '10px 10px',
  position: 'relative',
  marginBottom: '40px',
});

export const NameProject = styled(Typography)({
  fontSize: '45px',
  fontWeight: 'bold',
});

export const DivNumberDev = styled('div')({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '7px 0px',
});

export const DevIcons = styled(PersonIcon)({
  fontSize: '35px',

  color: '#000',
});

export const TextNumberDev = styled(Typography)({
  fontSize: '35px',
  color: '#000',
  fontWeight: 'bold',
});

export const FavIcon = styled(FavoriteIcon)({
  position: 'absolute',
  top: 15,
  right: 15,
  fontSize: '30px',
  color: '#07DFCD',
});

export const TextDateCreate = styled(Typography)({
  fontSize: '18px',
  color: '#000',
  fontWeight: 'bold',
});

export const Btn = styled(Button)(() => ({
  padding: '10px 10px',
  background: '#07DFCD',
  color: '#FFF',
  marginTop: '10px',
  ':hover': {
    background: '#07DFCD',
    color: '#FFF',
  },
}));
