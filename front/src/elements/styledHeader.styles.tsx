import { styled } from '@mui/system';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Box from '@mui/material/Box';
interface ArgsMenu {
  colorMenuBurger: string;
}

interface ArgsNotification {
  colornotif: string;
}

export const HeaderContainer = styled('div')(() => ({
  height: '100px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0px 40px',
  background: 'transparent',
}));

export const DivNotifAvatar = styled('div')(() => ({
  display: 'flex',
  height: '100%',
  alignItems: 'center',
}));

export const Notifications = styled(NotificationsIcon)<ArgsNotification>(
  ({ colornotif }) => ({
    color: colornotif,
    fontSize: '35px',
  })
);

export const AvatarUser = styled('div')<{ image: string }>(({ image }) => ({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  background: image,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  marginLeft: '15px',
  cursor: 'pointer',
}));

export const MenuBurger = styled(Box)<ArgsMenu>(({ colorMenuBurger }) => ({
  width: '40px',
  height: '4px',
  background: colorMenuBurger,
  cursor: 'pointer',
  borderRadius: '15px',
  position: 'relative',
  '&::after': {
    content: "''",
    display: 'block',
    position: 'absolute',
    background: colorMenuBurger,
    cursor: 'pointer',

    width: '100%',
    height: '4px',
    bottom: -10,
    left: 0,
  },
  '&::before': {
    content: "''",
    display: 'block',
    cursor: 'pointer',
    position: 'absolute',
    background: colorMenuBurger,
    borderRadius: '15px',
    width: '100%',
    height: '4px',
    top: -10,
    left: 0,
  },
}));

export const DivMenyBurger = styled('div')({
  display: 'flex',
  height: '50px',
  alignItems: 'center',
  cursor: 'pointer',
});
