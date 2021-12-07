import { useState } from 'react';
import { auth } from '../Firebase';

import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography
} from '@material-ui/core';
import FacebookIcon from '../icons/Facebook';
import GoogleIcon from '../icons/Google';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (event) => {
      event.preventDefault();
      auth.signInWithEmailAndPassword(email, password)
      .then(() => {
          auth.onAuthStateChanged(function(user) {
              if (user) {
                  localStorage.setItem("userId", user.uid);
                  localStorage.setItem("userEmail", user.email);
                  window.location.href = "/app/dashboard";
              } else {
                  alert("Wrong Credentials")
              }
          });
      })
      .catch(function(error) {
          var errorMessage = error.message;
          alert(errorMessage);
      });
  }

  return (
    <>
      <Helmet>
        <title>Login | Admin</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm">
          <form>
            <Box sx={{ mb: 3 }}>
              <Typography
                color="textPrimary"
                variant="h2"
              >
                Admin Sign in
              </Typography>
            </Box>
            
            <h4 style={{marginTop: "1rem"}}>Email address</h4>
            <TextField
            fullWidth
            margin="normal"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            variant="outlined"
            />


            <h4 style={{marginTop: "1rem"}}>Password</h4>
            <TextField
            fullWidth
            margin="normal"
            name="password"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            variant="outlined"
            />
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                onClick={login}
                fullWidth
                size="large"
                type="button"
                variant="contained"
              >
                Sign in now
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Login;
