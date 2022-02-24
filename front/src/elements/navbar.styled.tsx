import { styled } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import WorkIcon from '@mui/icons-material/Work';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

interface DivProps {
  visible: number;
}

interface OpacityProps {
  opa?: number;
  cursoroption?: string;
}

export const StyledNavbar = styled(Box)<DivProps>(({ theme, visible }) => ({
  width: '300px',
  height: '100vh',
  boxShadow: '5px 0px 15px -1px #000000',
  background: '#fff',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 4,
  position: 'fixed',
  top: 0,
  left: visible,
  transition: 'left .5s',
}));

export const StyledNavbarTop = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  width: '100%',
  cursor: 'pointer',
}));

export const Close = styled(CloseIcon)(() => ({
  fontSize: '40px',
  color: '#000',
  position: 'absolute',
  zIndex: 5,
  right: 10,
  top: 10,
  cursor: 'pointer',
}));

export const Logo = styled('img')(() => ({
  width: '100px',
  height: '75px',
  marginTop: '20px',
}));

export const Home = styled(HomeIcon)(() => ({
  fontSize: '40px',
  color: '#000',
}));

export const UserProfil = styled(PersonIcon)(() => ({
  fontSize: '40px',
  color: '#000',
}));

export const Team = styled(GroupsIcon)(() => ({
  fontSize: '40px',
  color: '#000',
}));
export const Work = styled(WorkIcon)(() => ({
  fontSize: '40px',
  color: '#000',
}));

export const Deconnect = styled(PowerSettingsNewIcon)(() => ({
  fontSize: '40px',
  color: '#000',
}));

export const ContainerOption = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
}));

export const Option = styled(Box)<OpacityProps>(({ opa, cursoroption }) => ({
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '30px',
  width: '100%',
  marginTop: '25px',
  cursor: cursoroption,
  opacity: opa,
}));

export const NavTypography = styled(Typography)(() => ({
  marginLeft: '15px',
  fontSize: '28px',
}));
export const AccordionStyled = styled(Accordion)<OpacityProps>(
  ({ opa, cursoroption }) => ({
    boxShadow: 'none',
    marginTop: '15px',
    opacity: opa,
    cursor: cursoroption,
    '::before': {
      display: 'none',
    },
    '& > div': {
      padding: '0 29px',
    },
  })
);

export const AccordionDetailsStyled = styled(AccordionDetails)<OpacityProps>(
  ({ cursoroption }) => ({
    padding: '0px',
    cursor: cursoroption,
  })
);
export const ListStyled = styled('li')<OpacityProps>(({ cursoroption }) => ({
  position: 'relative',
  fontSize: '20px',
  marginBottom: '10px',
  overflowWrap: 'break-word',
  cursor: cursoroption,
  '&:hover': {
    color: '#DAD6D6',
  },
}));
