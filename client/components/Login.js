import { useState } from 'react';

import { Box, Button, Container, Link, TextField, Typography } from '@mui/material';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { auth } from '../Firebase';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();


    const login = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            auth.onAuthStateChanged(function(user) {
                if (user) {
                    sessionStorage.setItem("userId", user.uid);
                    sessionStorage.setItem("userEmail", user.email);
                    router.push({
                        pathname: '/'
                    });
                } else {
                    setMessage('We have send a Verification Link on your Email Address');
                }
            });
        })
        .catch(function(error) {
            var errorMessage = error.message;
            setMessage(errorMessage);
        });
    }

    return (
        <>
            <Container maxWidth="sm">
            <form>
                <Box sx={{ my: 3 }}>
                    <center>
                        <img style={{ width: '50%', marginBottom: '20px' }} src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1638719652/fileuploadproject3d/logo_wwfypc-removebg-preview_a39t4q.png" alt="Logo" />
                    </center>

                
                    <Typography
                        color="textPrimary"
                        variant="h4"
                    >
                        Sign in
                    </Typography>
                    <Typography
                        color="textSecondary"
                        gutterBottom
                        variant="body2"
                    >
                        Sign in on the internal platform
                    </Typography>
                </Box>
                
                <Box
                sx={{
                    pb: 1,
                }}
                >
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
                    fullWidth
                    size="large"
                    onClick={login}
                    type="button"
                    variant="contained"
                >
                    Sign In Now
                </Button>
                </Box>
                <Typography
                color="textSecondary"
                variant="body2"
                >
                Don&apos;t have an account?
                {' '}
                <NextLink
                    href="/register"
                >
                    <Link
                    to="/register"
                    variant="subtitle2"
                    underline="hover"
                    sx={{
                        cursor: 'pointer',
                        color: '#FFFFFF'
                    }}
                    >
                    Sign Up
                    </Link>
                </NextLink>
                </Typography>
            </form>
            </Container>
        </>
    )
}

export default Login
