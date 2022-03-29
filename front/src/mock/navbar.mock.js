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
    disabled:false,
    
  },
  {
    label: 'Profil',
    icon: <UserProfil />,
    link: '/updateprofil',
    disabled:false,
  },
  {
    label: 'Team',
    icon: <Team />,
    link: '/team',
    disabled:true,
  },
  {
    label: 'Project',
    icon: <Work />,
    link: '/project',
    disabled:true,
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
    label: 'Disconnection',
    icon: <Deconnect />,
    link: '/login',
    disabled:false,
  },
];
