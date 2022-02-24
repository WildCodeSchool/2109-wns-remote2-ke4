import {
  Deconnect,
  Home,
  Team,
  UserProfil,
  Work,
} from '../elements/navbar.styled';

export const navbarOption = [
  {
    label: 'Board',
    icon: <Home />,
    link: '/board',
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
    project:[
      {
        name:'Projet 1',
        linkProject:'/project/1',
      },
      {
        name:'Projet 2',
        linkProject:'/project/2',
      }
    ]
  },
  {
    label: 'Deconnect',
    icon: <Deconnect />,
    link: '/login',
  },
];
