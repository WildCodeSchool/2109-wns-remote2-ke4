import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormHelperText from '@mui/material/FormHelperText';

const InputPassword: React.FC<{
  label: string;
  state: boolean;
  onChangeView: (b: boolean) => void;
  value: any;
  onChange: any;
  name?: string;
  error?: any;
  helperText?: any;
}> = ({
  state,
  onChangeView,
  label,
  value,
  onChange,
  name,
  error,
  helperText,
}) => {
  return (
    <FormControl variant="outlined" fullWidth margin="normal">
      <InputLabel htmlFor="password" variant="outlined">
        {label}
      </InputLabel>
      <OutlinedInput
        fullWidth
        id="password"
        label="Mot de passe"
        name={name}
        value={value}
        onChange={onChange}
        type={state ? 'text' : 'password'}
        error={error}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => onChangeView(!state)}
              edge="end"
            >
              {state ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
      {helperText && <FormHelperText error>{helperText}</FormHelperText>}
    </FormControl>
  );
};
export default InputPassword;
