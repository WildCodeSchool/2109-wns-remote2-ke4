import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { makeStyles, createStyles } from '@mui/styles';
import workspace from '../../assets/images/workspace.jpg';
import logo from '../../assets/images/logoKe4.png';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

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
  labelBtn: string;
  type: 'login' | 'register';
}> = ({ children, labelBtn, type }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid md={5} className={classes.img}></Grid>
      <Grid md={7} sm={12} xs={12}>
        <Box className={classes.form}>
          <img src={logo} alt="logo" className={classes.logo} />
          {children}
          <Button
            style={{
              background: '#000',
              color: '#fff',
              margin: '25px 0px',
              padding: '10px 20px',
            }}
          >
            {labelBtn}
          </Button>
          <Typography
            variant="h6"
            sx={{
              color: 'blue',
              position: 'relative',
              '&::after': {
                content: `''`,
                display: 'block',
                width: '100%',
                height: '2px',
                background: 'blue',
                position: 'absolute',
                bottom: 5,
                left: 0,
              },
            }}
          >
            {type === 'register'
              ? 'Already account ?'
              : 'Not already account ?'}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
export default RegisterLogin;
