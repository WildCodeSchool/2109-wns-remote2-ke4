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

export const getOptionsNavbar = (
  label: string,
  link: string,
  icon: React.ReactElement,
  disabled: boolean,
  history: any,
  key: any,
  handleUrlPage: (str: string) => void,
  projects?: { name: string; linkProject: string }[] | null
) => {
  if (label !== 'Project') {
    return (
      <Option
        key={key}
        onClick={() => {
          handleUrlPage(link);
          history.push(link);
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
                  handleUrlPage(project.linkProject);
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
  handleUrlPage: (str: string) => void;
}> = ({ onChange, navbar, handleUrlPage }) => {
  const history = useHistory();

  return (
    <StyledNavbar visible={navbar ? 0 : -310}>
      <StyledNavbarTop>
        <Logo
          src={logo}
          alt="logo"
          onClick={() => {
            handleUrlPage('/');
            history.push('/');
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
            handleUrlPage,
            project
          )
        )}
      </ContainerOption>
    </StyledNavbar>
  );
};
export default Navbar;
