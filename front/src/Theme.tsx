import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    success: {
      main: '#2ecc71',
    },
    warning: {
      main: '#f1c40f',
    },
    error: {
      main: '#e74c3c',
    },
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});
