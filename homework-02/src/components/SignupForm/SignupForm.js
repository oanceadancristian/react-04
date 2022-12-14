import React from 'react';
import './SignupForm.css';
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const SignupForm = () => {
  const theme = createTheme({
    palette: {
      social: {
        main: '#3c8cad',
        contrastText: '#fff',
      },
    },
  });

  return (
    <form>
      <h1>Sign Up</h1>
      <p className="account-creation">
        <div className="align-icon">
          <PersonIcon fontSize="large" />
          Create your account
        </div>
      </p>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        type="text"
        size="small"
        fullWidth
        margin="normal"
        required
      />
      <TextField
        id="outlined-basic"
        label="Email Address"
        variant="outlined"
        type="email"
        size="small"
        fullWidth
        margin="normal"
        required
      />
      <p className="help-text">
        This site uses Gravatar so if you want a profile image, use a Gravatar
        email
      </p>
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        type="password"
        size="small"
        fullWidth
        margin="normal"
        required
      />
      <TextField
        id="outlined-basic"
        label="Confirm Password"
        variant="outlined"
        type="password"
        size="small"
        fullWidth
        margin="normal"
        required
      />
      <ThemeProvider theme={theme}>
        <Button
          type="submit"
          color="social"
          variant="contained"
          sx={{ textTransform: 'capitalize', mt: 1 }}
        >
          Register
        </Button>
      </ThemeProvider>
      <p className="account-owner">
        Already have an account?
        <Link
          color="#3c8cad"
          href="#"
          sx={{ textTransform: 'capitalize', textDecoration: 'none', ml: 1 }}
        >
          Sign in
        </Link>
      </p>
    </form>
  );
};

export default SignupForm;
