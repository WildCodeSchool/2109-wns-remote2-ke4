import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/styles';
import { fontSize } from '@mui/system';

export const ModalStyles = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
export const ColumnDev = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
});

export const Column = styled(Box)({
  background: 'lightgrey',
  padding: 4,
  width: 300,
  minHeight: 470,
  maxHeight: 470,
  border: '1px solid black',
  borderRadius: '7px',
  overflowY: 'scroll',
});

export const CardDev = styled(Box)(() => ({
  userSelect: 'none',
  padding: 16,
  margin: '0 0 8px 0',
  minHeight: '50px',
  display: 'flex',
  alignItems: 'center',
  color: 'white',
}));

export const AvatarStyles = styled(Avatar)({
  width: '45px',
  height: '45px',
  marginRight: '10px',
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

export const DivColumns = styled(Box)({
  display: 'flex',
  width: '100%',
});
export const InputStyled = styled(TextField)({
  width: '100%',
  maxWidth: '400px',
});
export const TitleSearch = styled(Typography)({
  fontSize: '20px !important',
  margin: '10px auto !important',
});
