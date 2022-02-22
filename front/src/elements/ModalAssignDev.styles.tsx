import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/styles';

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
  minHeight: 540,
  maxHeight: 540,
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
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '25px',
});
