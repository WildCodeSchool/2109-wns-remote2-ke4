import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
const InputPassword: React.FC<{
  label: string;
  state: boolean;
  onChange: (b: boolean) => void;
}> = ({ state, onChange, label }) => {
  return (
    <FormControl variant="outlined" fullWidth margin="normal">
      <InputLabel htmlFor="password" variant="outlined">
        {label}
      </InputLabel>
      <OutlinedInput
        fullWidth
        id="password"
        label="Mot de passe"
        name="password"
        type={state ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => onChange(!state)}
              edge="end"
            >
              {state ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};
export default InputPassword;
