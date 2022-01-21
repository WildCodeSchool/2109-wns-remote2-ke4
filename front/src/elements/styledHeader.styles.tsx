import { styled } from '@mui/system';
import NotificationsIcon from '@mui/icons-material/Notifications';
import avatar from '../assets/images/avatar1.jpg';
import Badge from '@mui/material/Badge';

export const HeaderContainer = styled('div')(() => ({
  height: '100px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0px 40px',
}));

export const DivNotifAvatar = styled('div')(() => ({
  display: 'flex',
  height: '100%',
  alignItems: 'center',
}));

export const Notifications = styled(NotificationsIcon)(() => ({
  color: '#000',
  fontSize: '35px',
}));

export const AvatarUser = styled('div')(() => ({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  background: `url(${avatar})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  marginLeft: '15px',
}));

export const MenuBurger = styled('div')(() => ({
  width: '40px',
  height: '4px',
  background: '#000',
  borderRadius: '15px',
  position: 'relative',
  '&::after': {
    content: "''",
    display: 'block',
    position: 'absolute',
    background: '#000',

    width: '100%',
    height: '4px',
    bottom: -10,
    left: 0,
  },
  '&::before': {
    content: "''",
    display: 'block',
    position: 'absolute',
    background: '#000',
    borderRadius: '15px',
    width: '100%',
    height: '4px',
    top: -10,
    left: 0,
  },
}));
