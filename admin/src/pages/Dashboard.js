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



import { API_SERVICE } from '../config/URI';



const ProductList = ({ product, handleClickOpen }) => {
  return (
    <>
      <TableRow
        key={product._id}
        sx={{"&:last-child td, &:last-child th": {border: 0}}}
      >
        <TableCell component="th" scope="row">
          {product.name}
        </TableCell>
        <TableCell align="center">{product.cut}</TableCell>
        <TableCell align="center">{product.content}</TableCell>
        <TableCell align="center">{product.uploaded_to}</TableCell>
        <TableCell align="center">
          <Chip label={product.status} />
        </TableCell>
        <TableCell align="center">{product.reception}</TableCell>
        <TableCell align="center">{product.delivery_date}</TableCell>
        <TableCell align="center">
          <Button
            variant="contained"
            href={product.publicURL}
            target="_blank"
          >
            Download
          </Button>
        </TableCell>
        <TableCell align="center">
          <Button
            onClick={() => handleClickOpen(product)}
          >
            View More
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
};

const Dashboard = () => {
  const [loading, setloading] = React.useState(true);
  const [products, setproducts] = React.useState([]);
  const [status, setstatus] = React.useState("Received");

  const [productview, setproductview] = React.useState([]);

  const [open, setOpen] = React.useState(false);


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
        .get(`${API_SERVICE}/api/v1/main/getuserallfileuploadedtoserver`)
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
          handleClickOpen={handleClickOpen}
        />
      );
    });
  };


  const refreshData = () => {
    setloading(true);
    axios
      .get(`${API_SERVICE}/api/v1/main/getuserallfileuploadedtoserver`)
        .then((response) => {
          setproducts(response.data);
          setloading(false);
          handleClickSnackbar();
        })
        .catch((err) => console.log(err));
  }

  const changeProduct = (id) => {
    axios
      .get(
        `${API_SERVICE}/api/v1/main/changestatusfileupload/${id}/${status}`
      )
      .then((response) => {
        refreshData();
        handleClose();
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
        message="Status Changed Successfully"
      />


    <Dialog
      open={open}
      fullWidth
      maxWidth="sm"
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Details</DialogTitle>
      <DialogContent>
        <center>
          <Button
            fullWidth
            sx={{ mb: 4 }}
            size="large"
            href={productview.publicURL}
            target="_blank"
          >
            Download Now
          </Button>
        </center>

        <Typography variant="h6" sx={{ mb: 2, mt: 2 }} >
          Status: {productview.status}
        </Typography>
        <select onChange={(e) => setstatus(e.target.value)} style={{ width: '100%', padding: '10px', color: 'black', border: '2px solid black' }}>
          <option selected disabled>Change the Status</option>
          <option value="Received">Received</option>
          <option value="In process">In process</option>
          <option value="Delivered">Delivered</option>
          <option value="Invoiced">Invoiced</option>
        </select>

        <Typography variant="h6" sx={{ mb: 2, mt: 2 }}>
          User Name: {productview.s4hc4mbzw2vr}
        </Typography>

        <Typography variant="h6" sx={{ mb: 2, mt: 2 }} >
          User Phone Number: {productview.userphone}
        </Typography>

        <Typography variant="h6" sx={{ mb: 2, mt: 2 }} >
          User Email: {productview.useremail}
        </Typography>

        <Typography variant="h6" sx={{ mb: 2, mt: 2 }} >
          Details: {productview.reception}
        </Typography>

        <Typography variant="h6" sx={{ mb: 2, mt: 2 }} >
          Delivery Date: {productview.delivery_date}
        </Typography>

        
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
        <Button onClick={() => changeProduct(productview._id)} color="primary" autoFocus>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
    <div style={{ marginTop: '80px', marginBottom: '20px' }}>
      {loading === true ? (
        <center style={{ marginTop: "10%" }}>
          <CircularProgress sx={{ color: "#FFFFFF" }} />
        </center>
      ) : (
        <Container maxWidth="xl">
          <Typography variant="h2">All the Request</Typography>
          <TableContainer sx={{ mt: 2 }} component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="center">Cut</TableCell>
                  <TableCell align="center">Content type</TableCell>
                  <TableCell align="center">Uploaded to</TableCell>
                  <TableCell align="center">Status</TableCell>
                  <TableCell align="center">Desired reception</TableCell>
                  <TableCell align="center">Delivery date</TableCell>
                  <TableCell align="center">Download</TableCell>
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

export default Dashboard
