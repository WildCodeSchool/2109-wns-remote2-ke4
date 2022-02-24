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
}> = ({ onChange, color }) => {
  const classes = useStyles();

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
        <AvatarUser />
      </DivNotifAvatar>
    </HeaderContainer>
  );
};
export default Header;
