import { useState } from 'react';

import { Box, Button, Container, Link, TextField, Typography } from '@mui/material';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import axios from 'axios';
import { auth } from '../Firebase';
import { API_SERVICE } from '../config/URI';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();


    const login = (event) => {
        event.preventDefault();
        axios
            .get(`${API_SERVICE}/api/v1/main/getuseraccesspermissionfileupload/${email}`)
            .then((response) => {
                if (response.data[0].access) {
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
                                    // alert("We have send a Verification Link on your Email Address")
                                }
                            });
                        })
                        .catch(function(error) {
                            var errorMessage = error.message;
                            alert(errorMessage);
                        });
                } else {
                    alert("Your Account is Blocked");
                }
            })
            .catch((err) => console.log(err));
    }

    return (
        <>
            <Container maxWidth="sm">
            <form>
                <Box sx={{ my: 3 }}>
                    <center>
                        <img style={{ width: '30%', marginBottom: '20px' }} src="https://res.cloudinary.com/dlshlmi6j/image/upload/v1661948955/logos/Plan_de_travail_1_vcsz05.png" alt="Logo" />
                    </center>

                
                    <Typography
                        color="textPrimary"
                        variant="h4"
                    >
                        Connexion
                    </Typography>
                    <Typography
                        color="textSecondary"
                        gutterBottom
                        variant="body2"
                    >
                        {/* Sign in on the internal platform */}
                    </Typography>
                </Box>
                
                <Box
                sx={{
                    pb: 1,
                }}
                >
                </Box>
                <TextField
                fullWidth
                margin="normal"
                label="Email"
                name="email"
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                variant="outlined"
                />


                <TextField
                fullWidth
                label="Mot de passe"
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
                    Se connecter
                </Button>
                </Box>
                <Typography
                color="textSecondary"
                variant="body2"
                >
                Vous n'avez pas de compte ?
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
                    }}
                    >
                    Inscription
                    </Link>
                </NextLink>
                </Typography>
            </form>
            </Container>
        </>
    )
}

export default Login
