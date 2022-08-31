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
import axios from 'axios';
import { auth } from '../Firebase';
import { API_SERVICE } from '../config/URI';



const Register = () => {

    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');

    const [btndisabled, setbtndisabled] = useState(false);


    const register = (event) => {
        setbtndisabled(true);
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
                var uploadData = {
                    email,
                    displayName: `${firstname} ${lastname}`,
                    vat: "",
                    billingaddress: ""
                };
                axios
                    .post(`${API_SERVICE}/api/v1/main/adduserfileto`, uploadData)
                    .then((response) => {
                        router.push('/');
                    })
                    .catch((err) => console.log(err));
            })
            .catch(err => console.log(err))
        })
        .catch(function(error) {
            var errorMessage = error.message;
            console.log(errorMessage);
            setbtndisabled(false);
        });
    }
    return (
        <>
            <Container maxWidth="sm">
                <form >
                    <center>
                        <img style={{ width: '30%', marginBottom: '30px' }} src="https://res.cloudinary.com/dlshlmi6j/image/upload/v1661948955/logos/Plan_de_travail_1_vcsz05.png" alt="Logo" />
                    </center>
                    <Box sx={{ my: 3 }}>
                    <Typography
                        color="textPrimary"
                        variant="h4"
                    >
                        Créer un compte
                    </Typography>
                    <Typography
                        color="textSecondary"
                        gutterBottom
                        variant="body2"
                    >
                        {/* Use your email to create a new account */}
                    </Typography>
                    </Box>
                    <TextField
                    fullWidth
                    margin="normal"
                    label="Prénom"
                    name="firstName"
                    onChange={(event) => setfirstname(event.target.value)}
                    variant="outlined"
                    />
                    <TextField
                    fullWidth
                    label="Nom"
                    margin="normal"
                    name="lastName"
                    onChange={(event) => setlastname(event.target.value)}
                    variant="outlined"
                    />
                    <TextField
                    fullWidth
                    margin="normal"
                    label="Adresse mail"
                    onChange={(event) => setEmail(event.target.value)}
                    name="email"
                    type="email"
                    variant="outlined"
                    />
                    <TextField
                    fullWidth
                    label="Mot de passe"
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
                        disabled={btndisabled}
                        variant="contained"
                    >
                        Inscription
                    </Button>
                    </Box>
                    <Typography
                    color="textSecondary"
                    variant="body2"
                    >
                    Vous avez déjà un compte ?
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
                            }}
                        >
                        Connexion
                        </Link>
                    </NextLink>
                    </Typography>
                </form>
                </Container>
        </>
    )
}

export default Register
