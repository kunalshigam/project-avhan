import React from 'react';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Button } from '@mui/material';

const theme = createTheme({
  overrides: {
    MuiOutlinedInput: {
      root: {
        borderRadius: '16px', 
        '& $notchedOutline': {
          borderColor: 'black',
        },
      },
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <div style={{ position: 'relative' }}>
      <Button
        variant="contained"
        color="primary"
        style={{ position: 'absolute', top: 0, right: 0 }}
      >
        Button
      </Button>
      {/* Your content */}
    </div>
  </ThemeProvider>
  );
};

export default App;
