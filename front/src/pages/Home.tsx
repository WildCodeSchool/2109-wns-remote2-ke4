import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import logo from '../assets/images/logoKe4.png';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const Container = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  minHeight: '100vh',
}));

const Img = styled('img')(() => ({
  maxWidth: '500px',
  maxHeight: '500px',
  width: '95%',
  height: '95%',
}));

const ButtonLog = styled(Button)(() => ({
  padding: '10px 20px',
  background: '#fff',
  fontWeight: 'bold',
  fontSize: '17px',
  color: '#000',
  boxShadow: '0px 0px 10px 1px #000000',
  maxWidth: '200px',
  cursor: 'pointer',
}));

const ButtonSign = styled(Button)(() => ({
  padding: '10px 20px',
  background: '#000',
  fontWeight: 'bold',
  fontSize: '17px',
  color: '#FFF',
  width: '180px',
  marginLeft: '55px',
  cursor: 'pointer',
  '&:hover': {
    background: '#000',
  },
}));

const TypographyHome = styled(Typography)(() => ({
  fontSize: '40px',
  fontWeight: 'bold',
  textAlign: 'center',
  margin: '60px 0px',
}));
const Base = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Img src={logo} alt="logo" />
      <TypographyHome>
        Organisez un projet professionel n'a jamais été <br />
        aussi simple avec Ke4 Kits.
      </TypographyHome>
      <div
        style={{
          display: 'flex',
          width: '90%',
          maxWidth: '500px',
          justifyContent: 'space-around',
        }}
      >
        <ButtonLog onClick={() => navigate('/login')}>Se connecter</ButtonLog>
        <ButtonSign onClick={() => navigate('/register')}>
          S'inscrire
        </ButtonSign>
      </div>
    </Container>
  );
};
export default Base;
