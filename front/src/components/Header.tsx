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

const useStyles = makeStyles(() =>
  createStyles({
    badge: {
      top: '5px!important',
      right: '3px!important',
    },
  })
);

const Header: React.FC<{
  onChange: (b: boolean) => void;
  color: string;
  viewer: any;
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
          onClick={() => {
            history.push('/updateprofil');
          }}
          image={
            viewer?.avatar
              ? `url(http://localhost:4000/avatar/${viewer?.avatar})`
              : `url(${defaultAvatar})`
          }
        />
      </DivNotifAvatar>
    </HeaderContainer>
  );
};
export default Header;
