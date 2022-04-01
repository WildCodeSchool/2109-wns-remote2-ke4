import {
  AvatarUser,
  DivMenyBurger,
  DivNotifAvatar,
  HeaderContainer,
  MenuBurger,
  Notifications,
} from '../elements/styledHeader.styles';
import Badge from '@mui/material/Badge';
import { makeStyles, createStyles } from '@mui/styles';
import { useHistory } from 'react-router-dom';
import defaultAvatar from '../assets/images/default_profile.png';
import { TypeUser } from '../types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const useStyles = makeStyles(() =>
  createStyles({
    badge: {
      top: '5px!important',
      right: '3px!important',
    },
    list: {
      display: 'none',
      position: 'absolute',
      bottom: -30,
      left: -30,
      zIndex: 20,

      width: '130px',
      background: '#fff',
      '&:hover': {
        display: 'flex',
        flexDirection: 'column',
      },
    },
    avatar: {
      position: 'relative',
      '&:hover': {
        '& > $list': {
          display: 'flex',
          flexDirection: 'column',
        },
      },
    },
    span: {
      textAlign: 'center',
    },
  })
);

const Header: React.FC<{
  onChange: (b: boolean) => void;
  color: string;
  viewer: TypeUser | undefined | null;
}> = ({ onChange, color, viewer }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <HeaderContainer>
      <DivMenyBurger onClick={() => onChange(true)}>
        <MenuBurger colorMenuBurger={color} />
      </DivMenyBurger>
      <DivNotifAvatar>
        <Badge
          classes={{
            badge: classes.badge,
          }}
          badgeContent={4}
          color="primary"
        >
          <Notifications colornotif={color} />
        </Badge>
        <AvatarUser
          image={
            viewer?.avatar
              ? `url(http://localhost:4000/avatar/${viewer?.avatar})`
              : `url(${defaultAvatar})`
          }
          className={classes.avatar}
        >
          <List
            component="nav"
            aria-label="mailbox folders"
            className={classes.list}
          >
            <ListItem
              button
              divider
              onClick={() => {
                window.location.replace('/profile');
              }}
            >
              <ListItemText primary="Voir profil" className={classes.span} />
            </ListItem>

            <ListItem
              button
              onClick={() => {
                window.location.replace('/updateprofil');
              }}
            >
              <ListItemText
                primary="Modifier le profil"
                className={classes.span}
              />
            </ListItem>
          </List>
        </AvatarUser>
      </DivNotifAvatar>
    </HeaderContainer>
  );
};
export default Header;
