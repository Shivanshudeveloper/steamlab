import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import {useDropzone} from "react-dropzone";
import { v4 as uuid4 } from 'uuid';
import byteSize from 'byte-size';
import Chip from '@mui/material/Chip';
import { CircularProgress } from '@mui/material';

import axios from 'axios';

import { storage, auth } from "../Firebase/index";
import { API_SERVICE } from '../config/URI';



const ProductList = ({ product }) => {
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
          <Chip sx={{ backgroundColor: 'blue', color: '#FFFFFF' }} label={product.status} />
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
      </TableRow>
    </>
  );
};


const UploadNewFile = () => {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  const [products, setproducts] = React.useState([]);

  const [open, setOpen] = React.useState(false);
  const [User, setUser] = React.useState({});
  const [loading, setloading] = React.useState(true);


  React.useEffect(() => {
      var email = sessionStorage.getItem("userEmail");
      console.log(email);
      auth.onAuthStateChanged(function(user) {
          if (user) {
            setUser(user);
          }
      });
      axios
        .get(`${API_SERVICE}/api/v1/main/getuserfileuploadedtoserver/${email}`)
          .then((response) => {
            setproducts(response.data);
            setloading(false);
          })
          .catch((err) => console.log(err));
  }, []);

  
  

  const refreshData = () => {
    var email = sessionStorage.getItem("userEmail");
    setloading(true);
    axios
      .get(`${API_SERVICE}/api/v1/main/getuserfileuploadedtoserver/${email}`)
        .then((response) => {
          setproducts(response.data);
          setloading(false);
        })
        .catch((err) => console.log(err));
  }



  const [deliveryDate, setDeliveryDate] = React.useState(
    new Date().toLocaleDateString()
  );
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const [comment, setcomment] = React.useState("");
  const handleChange = (event) => {
    setcomment(event.target.value);
  };

  const [rows, setRows] = React.useState([]);
  const [progressOpen, setProgressOpen] = React.useState(false);
  const [progressMessage, setProgressMessage] = React.useState("");
  const [userphone, setuserphone] = React.useState("");

  function createData(
    name,
    cut,
    contentType,
    uploadedTo,
    status,
    desiredReception,
    date
  ) {
    return {name, cut, contentType, uploadedTo, status, desiredReception, date};
  }

  // const getPublicURL = async (file) => {
  //   try {
  //     const url = await storage.ref(`/files/${file}`).getDownloadURL();
  //     return url;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const firebaseUpload = () => {
    acceptedFiles.forEach((file) => {
      var uniquetwoKey = uuid4();
      const uploadTask = storage.ref(`uploadsfiles/${uniquetwoKey}/${file.name}`).put(file);

      uploadTask.on('state_changed', (snapshot) => {
        const progress =  Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgressOpen(true);
        setProgressMessage(`Uploaded ${Math.floor(progress)}%`);
      },
    (error) => {
      setProgressMessage(error);
    },
    async () => {
        var size = byteSize(file.size);
        size = `${size.value} ${size.unit}`
        // When the Storage gets Completed
        const filePath = await uploadTask.snapshot.ref.getDownloadURL();
        var uploadData = {
          useremail: User.email,
          userfullname: User.displayName,
          userphone,
          name: file.path,
          cut: size,
          content: file.type,
          uploaded_to: new Date().toLocaleDateString(),
          status: "Received",
          reception: comment,
          delivery_date: deliveryDate,
          publicURL: filePath
        };
        axios
          .post(`${API_SERVICE}/api/v1/main/addfileuploadtoserver`, uploadData)
          .then((response) => {
            if (response.status === 200) {
              setProgressOpen(true);
              setProgressMessage(`File Successfully Send`);
              refreshData();
              setInterval(() => {
                setProgressOpen(false);
              }, 4000);
            }
          })
          .catch((err) => console.log(err));
    });
    });
  };

  const closeProgress = () => {
    setProgressOpen(false);
  };

  const fileSubmit = () => {
    firebaseUpload();
    const updatedRows = [...rows];
    acceptedFiles.forEach((file) => {
      var size = byteSize(file.size);
      size = `${size.value} ${size.unit}`
      updatedRows.push(
        createData(
          file.path,
          size,
          file.type,
          new Date().toLocaleDateString(),
          "Received",
          comment,
          deliveryDate
        )
      );
    });
    setRows(updatedRows);

    while (acceptedFiles.length > 0) {
      acceptedFiles.pop();
    }
    setcomment("");
    handleClose();
  };

  // const downloadFiles = async (file) => {
  //   try {
  //     console.log("clicked");
  //     const url = await storage.ref(`/files/${file}`).getDownloadURL();
  //     window.open(url, "_blank").focus();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const showProductList = () => {
    return products.map((product) => {
      return (
        <ProductList
          product={product}
          key={product._id}
        />
      );
    });
  };

  return (
    <>
      <Snackbar
        open={progressOpen}
        autoHideDuration={6000}
        message={progressMessage}
        onClose={closeProgress}
      />
      <Dialog
        open={open}
        fullWidth
        maxWidth="md"
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">STL File Upload</DialogTitle>
        <DialogContent>
          <Container>
            <section className="dropzone">
              <div {...getRootProps({className: "dsdsd"})}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
              <aside>
                <h4>Files</h4>
                <ul>{files}</ul>
              </aside>
            </section>

            <h4 style={{marginTop: "1rem"}}>When do you need it?</h4>
            <TextField
              id="outlined-multiline-static"
              fullWidth
              multiline
              rows={6}
              sx={{mt: 2}}
              value={comment}
              onChange={handleChange}
            />

            <h4 style={{marginTop: "1rem"}}>When do you need it?</h4>
            <TextField
              required
              id="outlined-required"
              type="date"
              fullWidth
              sx={{mt: 2}}
              onChange={(e) => {
                setDeliveryDate(e.target.value);
              }}
            />

            <h4 style={{marginTop: "1rem"}}>Phone Number</h4>
            <TextField
              required
              id="outlined-required"
              fullWidth
              sx={{mt: 2}}
              onChange={(e) => setuserphone(e.target.value)}
            />
          </Container>
        </DialogContent>
        <DialogActions>
          <Button size="large" sx={{color: '#FFFFFF' }} onClick={handleClose}>Close</Button>
          <Button size="large" sx={{ backgroundColor: '#141720', color: '#FFFFFF' }} onClick={fileSubmit} autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>


      <Button
        sx={{float: "right", mb: 8, mt: 5}}
        onClick={handleClickOpen}
        variant="contained"
        size="large"
      >
        Submit a STL File
      </Button>
      <h1 style={{ marginTop: '45px' }}>Shipment history</h1>

      {loading === true ? (
        <center style={{ marginTop: "10%" }}>
          <CircularProgress sx={{ color: "#FFFFFF" }} />
        </center>
      ) : (
        <>
          <TableContainer component={Paper}>
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
                </TableRow>
              </TableHead>
              <TableBody>
                {showProductList()}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
      
      
    </>
  );
};

export default UploadNewFile;

