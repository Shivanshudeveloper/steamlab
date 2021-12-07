import React from 'react';


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {
  Chip,
  Button,
  CircularProgress,
  Container,
  Typography
} from '@material-ui/core';
import axios from 'axios';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Snackbar from '@material-ui/core/Snackbar';
import DialogTitle from '@material-ui/core/DialogTitle';
import { auth } from "../Firebase/index";



import { API_SERVICE } from '../config/URI';



const ProductList = ({ product, blockuser, unblockuser }) => {
  return (
    <>
      <TableRow
        key={product._id}
        sx={{"&:last-child td, &:last-child th": {border: 0}}}
      >
        <TableCell component="th" scope="row">
          {product.displayName}
        </TableCell>
        <TableCell align="center">{product.email}</TableCell>
        <TableCell align="center">{product.vat}</TableCell>
        <TableCell align="center">{product.billingaddress}</TableCell>
        <TableCell align="center">
            {
                product.access ? (
                    <>Not Blocked</>
                ) : (
                    <>Blocked</>
                )
            }    
        </TableCell>
        <TableCell align="center">
            {
                product.access ? (
                    <Button
                        variant="contained"
                        onClick={() => blockuser(product._id)}
                    >
                        Block User
                    </Button>
                ) : (
                    <Button
                        variant="contained"
                        onClick={() => unblockuser(product._id)}
                    >
                        Un Block
                    </Button>
                )
            }   
          
          
          


        </TableCell>
      </TableRow>
    </>
  );
};

const Users = () => {
  const [loading, setloading] = React.useState(true);
  const [products, setproducts] = React.useState([]);
  const [status, setstatus] = React.useState("Received");
  const [message, setmessage] = React.useState("Received");

  const [productview, setproductview] = React.useState([]);

  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    auth.onAuthStateChanged(function(user) {
        if (!user) {
            window.location.href = "/login";
        }
    });
}, []);


  const handleClickOpen = (product) => {
    setproductview(product);
    console.log(product);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const handleClickSnackbar = () => {
    setOpenSnackbar(true);
  };
  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };


  React.useEffect(() => {
      axios
        .get(`${API_SERVICE}/api/v1/main/getallusersdatafileupload`)
          .then((response) => {
            setproducts(response.data);
            setloading(false);
          })
          .catch((err) => console.log(err));
  }, []);

  const showProductList = () => {
    return products.map((product) => {
      return (
        <ProductList
          product={product}
          key={product._id}
          blockuser={blockuser}
          unblockuser={unblockuser}
        />
      );
    });
  };


  const refreshData = () => {
    setloading(true);
    axios
      .get(`${API_SERVICE}/api/v1/main/getallusersdatafileupload`)
        .then((response) => {
          setproducts(response.data);
          setloading(false);
          handleClickSnackbar();
        })
        .catch((err) => console.log(err));
  }

  const blockuser = (id) => {
    axios
      .get(
        `${API_SERVICE}/api/v1/main/blockuserfileupload/${id}`
      )
      .then((response) => {
        setmessage("User Successfully Blocked");
        refreshData();
      })
      .catch((err) => console.log(err));
  }

  const unblockuser = (id) => {
    axios
      .get(
        `${API_SERVICE}/api/v1/main/unblockuserfileupload/${id}`
      )
      .then((response) => {
        setmessage("User Successfully Blocked");
        refreshData();
      })
      .catch((err) => console.log(err));
  }

  

  return (
    <>
    <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        message={message}
      />

    <div style={{ marginTop: '80px', marginBottom: '20px' }}>
      {loading === true ? (
        <center style={{ marginTop: "10%" }}>
          <CircularProgress sx={{ color: "#FFFFFF" }} />
        </center>
      ) : (
        <Container maxWidth="xl">
          <Typography variant="h2">All Users</Typography>
          <TableContainer sx={{ mt: 2 }} component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Full Name</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">VAT Number</TableCell>
                  <TableCell align="center">Billing Address</TableCell>
                  <TableCell align="center">Access</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {showProductList()}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      )}
    </div>
    </>
  )
}

export default Users
