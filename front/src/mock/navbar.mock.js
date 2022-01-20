import {
  Deconnect,
  Home,
  Team,
  UserProfil,
  Work,
} from '../elements/navbar.styled';

export const navbarOption = [
  {
    label: 'Home',
    icon: <Home />,
    link: '/',
  },
  {
    label: 'Profil',
    icon: <UserProfil />,
    link: '/updateprofil',
  },
  {
    label: 'Team',
    icon: <Team />,
    link: '/team',
  },
  {
    label: 'Project',
    icon: <Work />,
    link: '/project',
  },
  {
    label: 'Deconnect',
    icon: <Deconnect />,
    link: '/login',
  },
];
