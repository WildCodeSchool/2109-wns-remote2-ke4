import { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputPassword from './Ui/InputPassword';

const RegisterForm = () => {
  const [showPasswordOne, setShowPasswordOne] = useState(false);
  const [showPasswordTwo, setShowPasswordTwo] = useState(false);
  return (
    <Grid container spacing={1} style={{ padding: '0px 40px' }}>
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
        <InputPassword state={showPasswordOne} onChange={setShowPasswordOne} />
      </Grid>
      <Grid item md={6} sm={12} xs={12}>
        <InputPassword state={showPasswordTwo} onChange={setShowPasswordTwo} />
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
    </Grid>
  );
};
export default RegisterForm;
