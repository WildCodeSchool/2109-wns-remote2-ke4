import {
  Deconnect,
  Home,
  Team,
  UserProfil,
  Work,
} from '../elements/navbar.styled';

export const navbarOption = [
  {
    label: 'Accueil',
    icon: <Home />,
    link: '/ke4',
    disabled:false,
    
  },
  {
    label: 'Profil',
    icon: <UserProfil />,
    link: '/updateprofil',
    disabled:false,
  },
  {
    label: 'Mon Réseau',
    icon: <Team />,
    link: '/reseaux',
    disabled:false,
  },
  {
    label: 'Mes Projets',
    icon: <Work />,
    link: '/mesprojets',
    disabled:false,
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
    label: 'Deconection',
    icon: <Deconnect />,
    link: '/',
    disabled:false,
  },
];
