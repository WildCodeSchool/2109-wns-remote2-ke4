import { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputPassword from './Ui/InputPassword';
import { styled } from '@mui/material/styles';

const GridContainer = styled(Grid)(({ theme }) => ({
  padding: '0px 100px',
  marginBottom: '25px',
  margin: theme.spacing(0, 4),
  gap: 8,
  [theme.breakpoints.down('sm')]: {
    padding: '0px 20px',
  },
}));

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
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
        <InputPassword state={showPassword} onChange={setShowPassword} />
      </Grid>
    </GridContainer>
  );
};
export default LoginForm;
