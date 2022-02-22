import {
    AvatarUser,
    DivNotifAvatar,
    HeaderContainer,
    MenuBurger,
    Notifications,
  } from '../elements/styledHeader.styles';
  import Badge from '@mui/material/Badge';
  import { makeStyles, createStyles } from '@mui/styles';
  
  const useStyles = makeStyles(() =>
    createStyles({
      badge: {
        top: '5px!important',
        right: '3px!important',
      },
    })
  );
  
  const Header = () => {
    const classes = useStyles();
    return (
      <HeaderContainer>
        <MenuBurger />
        <DivNotifAvatar>
          <Badge
            classes={{
              badge: classes.badge,
            }}
            badgeContent={4}
            color="primary"
          >
            <Notifications />
          </Badge>
          <AvatarUser />
        </DivNotifAvatar>
      </HeaderContainer>
    );
  };
  export default Header;