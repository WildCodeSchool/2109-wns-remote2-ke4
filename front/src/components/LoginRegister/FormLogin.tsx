import { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputPassword from './InputPassword';
import { styled } from '@mui/material/styles';
import { ButtonStyled } from '../../elements/registerlogin.styled';

const GridContainer = styled(Grid)(({ theme }) => ({
  padding: '0px 100px',
  marginBottom: '25px',
  [theme.breakpoints.down('sm')]: {
    padding: '0px 20px!important',
  },
}));

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <>
      <GridContainer container spacing={4}>
        <Grid item sm={12} md={12} xs={12}>
          <TextField
            id="outlined-required"
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
          />
        </Grid>
        <Grid item sm={12} md={12} xs={12}>
          <InputPassword
            label="Mot de passe"
            state={showPassword}
            onChangeView={setShowPassword}
            value=""
            onChange={() => {}}
          />
        </Grid>
      </GridContainer>

      <ButtonStyled type="submit">Se connecter</ButtonStyled>
    </>
  );
};
export default LoginForm;
