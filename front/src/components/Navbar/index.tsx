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
import { navbarOption } from '../../mock/navbar.mock';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
  const history = useHistory();
  return (
    <StyledNavbar>
      <StyledNavbarTop>
        <Logo src={logo} alt="logo" />
        <Close />
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
