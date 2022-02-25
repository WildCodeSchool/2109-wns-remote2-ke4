import Grid from '@mui/material/Grid';
import { makeStyles, createStyles } from '@mui/styles';
import workspace from '../../assets/images/workspace.jpg';
import logo from '../../assets/images/logoKe4.png';
import Box from '@mui/material/Box';
import { TypographyStyled } from '../../elements/registerlogin.styled';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      width: '100%',
      height: '100vh',
    },
    img: {
      background: `url(${workspace})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

      height: '100%',
    },
    logo: {
      width: '280px',
      height: '230px',
      margin: '50px auto 30px auto',
    },
    btn: {
      background: '#000',
      color: '#fff',
      padding: '10px 10px',
    },
  })
);
const RegisterLogin: React.FC<{
  children?: any;
  type: 'login' | 'register';
}> = ({ children, type }) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Grid container className={classes.container}>
      <Grid md={5} className={classes.img}></Grid>
      <Grid md={7} sm={12} xs={12}>
        <Box className={classes.form}>
          <img src={logo} alt="logo" className={classes.logo} />
          {children}

          <TypographyStyled
            variant="h6"
            onClick={() => {
              if (type === 'register') {
                history.push('/login');
              } else {
                history.push('/register');
              }
            }}
          >
            {type === 'register'
              ? 'Already account ?'
              : 'Not already account ?'}
          </TypographyStyled>
        </Box>
      </Grid>
    </Grid>
  );
};
export default RegisterLogin;
