import {
  Close,
  ContainerOption,
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

const Navbar: React.FC<{ onChange: (b: boolean) => void; navbar: boolean }> = ({
  onChange,
  navbar,
}) => {
  const history = useHistory();
  return (
    <StyledNavbar visible={navbar ? 0 : -310}>
      <StyledNavbarTop>
        <Logo src={logo} alt="logo" />
        <Close onClick={() => onChange(false)} />
      </StyledNavbarTop>
      <ContainerOption>
        {navbarOption.map(({ label, icon, link }, index) => (
          <Option key={index} onClick={() => history.push(link)}>
            {icon} <NavTypography variant="h4">{label}</NavTypography>
          </Option>
        ))}
      </ContainerOption>
    </StyledNavbar>
  );
};
export default Navbar;
