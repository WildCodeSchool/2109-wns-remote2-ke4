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
import { useHistory } from 'react-router-dom';
import { AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useCookies } from 'react-cookie';

export const getOptionsNavbar = (
  label: string,
  link: string,
  icon: React.ReactElement,
  disabled: boolean,
  history: any,
  key: any,
  onClose: () => void,
  projects?: { name: string; linkProject: string }[] | null,
  onClick?: () => void
) => {
  if (label !== 'Mes Projets') {
    return (
      <Option
        key={key}
        onClick={() => {
          if (label === 'Deconection' && onClick) {
            onClick();

            history.push(link);
          } else {
            if (label !== 'Mes projets') {
              onClose();

              history.push(link);
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
            {(projects || []).map((project, index) => (
              <ListStyled
                key={index}
                onClick={() => {
                  onClose();
                  history.push(project.linkProject);
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
  const history = useHistory();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, __, removeCookie] = useCookies(['token']);

  const onDisconnect = async () => {
    removeCookie('token');
    onChange(false);
    setTimeout(() => {
      history.push('/');
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
            history.push('/ke4');
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
            history,
            index,

            closeNav,
            project,
            onDisconnect
          )
        )}
      </ContainerOption>
    </StyledNavbar>
  );
};
export default Navbar;
