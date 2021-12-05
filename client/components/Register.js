import React, { useState } from 'react'
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography
} from '@mui/material';

import { auth } from '../Firebase';



const Register = () => {

    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');



    const register = (event) => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((result) => {
            var user = result.user;
            // Profile Picture being set by default
            sessionStorage.setItem("userId", user.uid);
            sessionStorage.setItem("userEmail", user.email);
            user.updateProfile({
                photoURL: "https://kittyinpink.co.uk/wp-content/uploads/2016/12/facebook-default-photo-male_1-1.jpg",
                displayName: `${firstname} ${lastname}`
            })
            .then(() => {
                router.push('/');
            })
            .catch(err => console.log(err))
        })
        .catch(function(error) {
            var errorMessage = error.message;
            console.log(errorMessage);
        });
    }
    return (
        <>
            <Container maxWidth="sm">
                <form >
                    <center>
                        <img style={{ width: '50%', marginBottom: '20px' }} src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1638719652/fileuploadproject3d/logo_wwfypc-removebg-preview_a39t4q.png" alt="Logo" />
                    </center>
                    <Box sx={{ my: 3 }}>
                    <Typography
                        color="textPrimary"
                        variant="h4"
                    >
                        Create a new account
                    </Typography>
                    <Typography
                        color="textSecondary"
                        gutterBottom
                        variant="body2"
                    >
                        Use your email to create a new account
                    </Typography>
                    </Box>
                    <h4 style={{marginTop: "1rem"}}>First Name</h4>
                    <TextField
                    fullWidth
                    margin="normal"
                    name="firstName"
                    onChange={(event) => setfirstname(event.target.value)}
                    variant="outlined"
                    />
                    <h4 style={{marginTop: "1rem"}}>Last Name</h4>
                    <TextField
                    fullWidth
                    margin="normal"
                    name="lastName"
                    onChange={(event) => setlastname(event.target.value)}
                    variant="outlined"
                    />
                    <h4 style={{marginTop: "1rem"}}>Email Address</h4>
                    <TextField
                    fullWidth
                    margin="normal"
                    onChange={(event) => setEmail(event.target.value)}
                    name="email"
                    type="email"
                    variant="outlined"
                    />
                    <h4 style={{marginTop: "1rem"}}>Password</h4>
                    <TextField
                    fullWidth
                    onChange={(event) => setPassword(event.target.value)}
                    margin="normal"
                    name="password"
                    type="password"
                    variant="outlined"
                    />
                    <Box
                    sx={{
                        alignItems: 'center',
                        display: 'flex',
                        ml: -1
                    }}
                    >
                    {/* <Checkbox
                        checked={formik.values.policy}
                        name="policy"
                        onChange={formik.handleChange}
                    />
                    <Typography
                        color="textSecondary"
                        variant="body2"
                    >
                        I have read the
                        {' '}
                        <NextLink
                        href="#"
                        passHref
                        >
                        <Link
                            color="primary"
                            underline="always"
                            variant="subtitle2"
                        >
                            Terms and Conditions
                        </Link>
                        </NextLink>
                    </Typography> */}
                    </Box>
                    {/* {Boolean(formik.touched.policy && formik.errors.policy) && (
                    <FormHelperText error>
                        {formik.errors.policy}
                    </FormHelperText>
                    )} */}
                    <Box sx={{ py: 2 }}>
                    <Button
                        color="primary"
                        fullWidth
                        onClick={register}
                        size="large"
                        type="button"
                        variant="contained"
                    >
                        Sign Up Now
                    </Button>
                    </Box>
                    <Typography
                    color="textSecondary"
                    variant="body2"
                    >
                    Have an account?
                    {' '}
                    <NextLink
                        href="/login"
                        passHref
                        
                    >
                        <Link
                        variant="subtitle2"
                        underline="hover"
                        sx={{
                                cursor: 'pointer',
                                color: '#FFFFFF'
                            }}
                        >
                        Sign In
                        </Link>
                    </NextLink>
                    </Typography>
                </form>
                </Container>
        </>
    )
}

export default Register
