import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Snackbar
} from '@mui/material';
import { auth } from '../../Firebase';

import axios from 'axios';
import { API_SERVICE } from '../../config/URI';


export const AccountProfileDetails = (props) => {
  const [User, setUser] = React.useState({});

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    vat: '',
    billingaddress: ''
  });

  React.useEffect(() => {
      auth.onAuthStateChanged(function(user) {
          if (user) {
            setUser(user);
            var stringArray = (user.displayName).split(/(\s+)/);
            axios
              .get(`${API_SERVICE}/api/v1/main/getuserdetaislfileupload/${user.email}`)
              .then((response) => {
                setValues({
                  firstName: stringArray[0],
                  lastName: stringArray[2],
                  email: user.email,
                  vat: response.data[0].vat,
                  billingaddress: response.data[0].billingaddress
                })
              })
              .catch((err) => console.log(err));
          }
      });
  }, []);

  

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const logout = () => {
    auth.signOut().then(function() {
      router.push('/');
    }).catch(function(error) {
        console.log(error);
    });
  }

  const updateProfileUser = () => {
    auth.onAuthStateChanged(function(user) {
      if (user) {
        user.updateProfile({
            displayName: `${values.firstName} ${values.lastName}`,
            email: values.email
        })
        .then(() => {
            axios
              .get(`${API_SERVICE}/api/v1/main/updateuserfileupload/${user.email}/${values.vat}/${values.billingaddress}`)
              .then((response) => {
                  handleClick();
              })
              .catch((err) => console.log(err));
        })
        .catch(err => console.log(err))
      }
    });
  }

  return (
    <>
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={handleClose}
      message="Profile Successfully Updated"
    />
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                autoFocus
                helperText="Please specify the first name"
                label="First name"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                autoFocus
                label="Last name"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                autoFocus
                label="Email Address"
                name="email"
                disabled
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                autoFocus
                label="Billing Address"
                name="billingaddress"
                onChange={handleChange}
                type="text"
                value={values.billingaddress}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                autoFocus
                label="VAT number"
                name="vat"
                onChange={handleChange}
                type="text"
                value={values.vat}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="error"
            variant="outlined"
            onClick={logout}
            sx={{ mr: 2 }}
          >
            Logout
          </Button>
          <Button
            color="primary"
            onClick={updateProfileUser}
            variant="contained"
          >
            Save details
          </Button>
        </Box>
      </Card>
    </form>
    </>
  );
};
