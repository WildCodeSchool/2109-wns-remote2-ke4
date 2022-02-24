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
  history: any,
  key: any,
  projects?: { name: string; linkProject: string }[] | null
) => {
  if (label !== 'Project') {
    return (
      <Option key={key} onClick={() => history.push(link)}>
        {icon} <NavTypography variant="h4">{label}</NavTypography>
      </Option>
    );
  } else {
    return (
      <AccordionStyled>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {icon} <NavTypography variant="h4">{label}</NavTypography>
        </AccordionSummary>
        <AccordionDetailsStyled>
          <ul>
            {(projects || []).map((project) => (
              <ListStyled onClick={() => history.push(project.linkProject)}>
                {project.name}
              </ListStyled>
            ))}
          </ul>
        </AccordionDetailsStyled>
      </AccordionStyled>
    );
  }
};

const Navbar: React.FC<{ onChange: (b: boolean) => void; navbar: boolean }> = ({
  onChange,
  navbar,
}) => {
  const history = useHistory();

  return (
    <StyledNavbar visible={navbar ? 0 : -310}>
      <StyledNavbarTop onClick={() => history.push('/')}>
        <Logo src={logo} alt="logo" />
        <Close
          onClick={(e) => {
            e.preventDefault();
            onChange(false);
          }}
        />
      </StyledNavbarTop>
      <ContainerOption>
        {navbarOption.map(({ label, icon, link, project }, index) => (
          <>{getOptionsNavbar(label, link, icon, history, index, project)}</>
        ))}
      </ContainerOption>
    </StyledNavbar>
  );
};
export default Navbar;
