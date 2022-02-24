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
  handleUrlPage: (str: string) => void;
}> = ({ onChange, color, handleUrlPage }) => {
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
            handleUrlPage('/updateprofil');
            history.push('/updateprofil');
          }}
        />
      </DivNotifAvatar>
    </HeaderContainer>
  );
};
export default Header;
