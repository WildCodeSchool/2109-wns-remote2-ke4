import { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputPassword from '../LoginRegister/InputPassword';
import { styled } from '@mui/material/styles';

const GridContainerUpdate = styled(Grid)(({ theme }) => ({
  padding: '0px 150px',

  [theme.breakpoints.down('md')]: {
    padding: '0px 50px',
  },
}));

const LoginUpdateProfil = () => {
  const [showPasswordOne, setShowPasswordOne] = useState(false);
  const [showPasswordTwo, setShowPasswordTwo] = useState(false);
  return (
    <GridContainerUpdate container spacing={1}>
      <Grid item md={6} sm={12} xs={12}>
        <TextField
          id="outlined-required"
          fullWidth
          label="Prenom"
          variant="outlined"
          margin="normal"
        />
      </Grid>
      <Grid item md={6} sm={12} xs={12}>
        <TextField
          id="outlined-required"
          fullWidth
          label="Nom"
          variant="outlined"
          margin="normal"
        />
      </Grid>
      <Grid item md={6} sm={12} xs={12}>
        <TextField
          id="outlined-required"
          fullWidth
          label="Pseudo"
          variant="outlined"
          margin="normal"
        />
      </Grid>
      <Grid item md={6} sm={12} xs={12}>
        <TextField
          id="outlined-required"
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
        />
      </Grid>
      <Grid item md={6} sm={12} xs={12}>
        <InputPassword
          label="Mot de passe"
          state={showPasswordOne}
          onChange={setShowPasswordOne}
        />
      </Grid>
      <Grid item md={6} sm={12} xs={12}>
        <InputPassword
          label="Confirmer"
          state={showPasswordTwo}
          onChange={setShowPasswordTwo}
        />
      </Grid>
      <Grid item md={6} sm={12} xs={12}>
        <TextField
          fullWidth
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={2}
        />
      </Grid>
    </GridContainerUpdate>
  );
};
export default LoginUpdateProfil;
