import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { auth } from '../Firebase';

export default function NabBar() {
  const router = useRouter();

  const [user, setuser] = React.useState(false);
  const [User, setUser] = React.useState({});


  React.useEffect(() => {
      auth.onAuthStateChanged(function(user) {
          if (user) {
            setuser(true);
            setUser(user);
            console.log(user);
          } else {
            setuser(false);
          }
      });
  }, []);

  const logout = () => {
    auth.signOut().then(function() {
      router.push({
          pathname: '/login'
      });
    }).catch(function(error) {
        console.log(error);
    });
  }


  return (
    <>
      {
        user ? (
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <img style={{ width: '150px' }} src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1638719652/fileuploadproject3d/logo_wwfypc-removebg-preview_a39t4q.png" alt="Logo" />
                </Typography>
                <Link href="#!">
                  <Avatar onClick={logout} sx={{ cursor: 'pointer' }} alt={User.displayName} src={User.photoURL} />
                </Link>
              </Toolbar>
            </AppBar>
          </Box>
        ) : (
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <img style={{ width: '150px' }} src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1638719652/fileuploadproject3d/logo_wwfypc-removebg-preview_a39t4q.png" alt="Logo" />
                </Typography>
                <Link href="/login">
                  <Button color="inherit">Login / Register</Button>
                </Link>
              </Toolbar>
            </AppBar>
          </Box>
        )
      }
      
    </>
  );
}
