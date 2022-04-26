import {
  AccordionDetailsStyled,
  AccordionStyled,
  Close,
  ContainerOption,
  ListStyled,
  Logo,
  NavTypography,
  Option,
  StyledNavbar,
  StyledNavbarTop,
} from '../../elements/navbar.styled';
import logo from '../../assets/images/logoKe4.png';
import React from 'react';
import { navbarOption } from '../../mock/navbar.mock';
import { useNavigate } from 'react-router-dom';
import { AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useCookies } from 'react-cookie';
import { useGetAllMyProjectsNavbarQuery } from '../../graphql/Queries/Project/Project.query';

export const getOptionsNavbar = (
  label: string,
  link: string,
  icon: React.ReactElement,
  disabled: boolean,
  navigate: any,
  key: any,
  onClose: () => void,
  projects?: { name: string; linkProject: string }[] | null,
  onClick?: () => void,
  dataProject?: any
) => {
  if (label !== 'Mes Projets') {
    return (
      <Option
        key={key}
        onClick={() => {
          if (label === 'Deconection' && onClick) {
            onClick();

            navigate(link);
          } else {
            if (label !== 'Mes projets') {
              onClose();

              navigate(link);
            }
          }
        }}
        opa={disabled ? 0.4 : 1}
        cursoroption={disabled ? 'default' : 'pointer'}
      >
        {icon} <NavTypography variant="h5">{label}</NavTypography>
      </Option>
    );
  } else {
    return (
      <AccordionStyled
        opa={disabled ? 0.4 : 1}
        cursoroption={disabled ? 'default' : 'pointer'}
        key={key}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          style={{ cursor: `${disabled ? 'default' : 'pointer'}` }}
        >
          {icon} <NavTypography variant="h5">{label}</NavTypography>
        </AccordionSummary>
        <AccordionDetailsStyled cursoroption={disabled ? 'default' : 'pointer'}>
          <ul>
            {(dataProject || []).map((project: any) => (
              <ListStyled
                key={project?.id}
                onClick={() => {
                  onClose();
                  window.location.replace(`/project/${project?.id}`);
                }}
              >
                {project.name}
              </ListStyled>
            ))}
          </ul>
        </AccordionDetailsStyled>
      </AccordionStyled>
    );
  }
};

const Navbar: React.FC<{
  onChange: (b: boolean) => void;
  navbar: boolean;
}> = ({ onChange, navbar }) => {
  const navigate = useNavigate();
  const { data } = useGetAllMyProjectsNavbarQuery();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, __, removeCookie] = useCookies(['token']);

  const onDisconnect = async () => {
    removeCookie('token');
    onChange(false);
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  const closeNav = () => {
    onChange(false);
  };

  return (
    <StyledNavbar visible={navbar ? 0 : -310}>
      <StyledNavbarTop>
        <Logo
          src={logo}
          alt="logo"
          onClick={() => {
            navigate('/ke4');
            onChange(false);
          }}
        />
        <Close
          onClick={() => {
            onChange(false);
          }}
        />
      </StyledNavbarTop>
      <ContainerOption>
        {navbarOption.map(({ label, icon, link, project, disabled }, index) =>
          getOptionsNavbar(
            label,
            link,
            icon,
            disabled,
            navigate,
            index,
            closeNav,
            project,
            onDisconnect,
            data?.getAllProjectsByViewer
          )
        )}
      </ContainerOption>
    </StyledNavbar>
  );
};
export default Navbar;
