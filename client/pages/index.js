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

import {storage} from "../Firebase/index";

const UploadNewFile = () => {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

  const [open, setOpen] = React.useState(false);
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

  const getPublicURL = async (file) => {
    try {
      const url = await storage.ref(`/files/${file}`).getDownloadURL();
      return url;
    } catch (err) {
      console.log(err);
    }
  };

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
        // When the Storage gets Completed
        const filePath = await uploadTask.snapshot.ref.getDownloadURL();
        const fileKey = `${uniquetwoKey}/${file.name}`;
        const fileName = `${file.name}`;
    });
      
      // storage
      //   .ref(`/files/${file.path}`)
      //   .put(file)
      //   .on("state_changed", (snapshot) => {
      //     const progress =
      //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      //     setProgressOpen(true);
      //     setProgressMessage(`Uploaded ${Math.floor(progress)}%`);
      //   });
      // const durl = getPublicURL(file);
      // console.log(durl);
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
          "Pending",
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

  const downloadFiles = async (file) => {
    try {
      console.log("clicked");
      const url = await storage.ref(`/files/${file}`).getDownloadURL();
      window.open(url, "_blank").focus();
    } catch (err) {
      console.log(err);
    }
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
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{"&:last-child td, &:last-child th": {border: 0}}}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.cut}</TableCell>
                <TableCell align="center">{row.contentType}</TableCell>
                <TableCell align="center">{row.uploadedTo}</TableCell>
                <TableCell align="center">{row.status}</TableCell>
                <TableCell align="center">{row.desiredReception}</TableCell>
                <TableCell align="center">{row.date}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    onClick={() => {
                      downloadFiles(row.name);
                    }}
                  >
                    Download
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UploadNewFile;

