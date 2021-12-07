import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { AppBar, Avatar, Badge, Box, IconButton, Toolbar, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Bell as BellIcon } from '../icons/bell';
import { useRouter } from 'next/router';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import axios from 'axios';

import { auth } from '../Firebase';
import { API_SERVICE } from '../config/URI';


const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3]
}));



const ProductList = ({ product, handleClose }) => {
  return (
    <>
      <MenuItem onClick={handleClose}>{product.message}</MenuItem>
    </>
  );
};


export const DashboardNavbar = (props) => {
  const router = useRouter();

  const { onSidebarOpen, ...other } = props;

  const [loading, setloading] = React.useState(true);
  const [products, setproducts] = React.useState([]);

  const [user, setuser] = React.useState(false);
  const [User, setUser] = React.useState({});

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  React.useEffect(() => {
      auth.onAuthStateChanged(function(user) {
          if (user) {
            setuser(true);
            setUser(user);
          } else {
            router.push({
                pathname: '/login'
            });
          }
      });
  }, []);


  React.useEffect(() => {
    var email = sessionStorage.getItem("userEmail");
    axios
        .get(`${API_SERVICE}/api/v1/main/getusernotificationsfileuploadto/${email}`)
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
          handleClose={handleClose}
          key={product._id}
        />
      );
    });
  };
  

  const redirect = () => {
    router.push({
        pathname: '/account'
    });
  }

  return (
    <>
      <Paper sx={{ width: 320, maxWidth: '100%' }}>
        <Menu
          id="basic-menu"
          sx={{ padding: 10 }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
                  >
          {loading === true ? (
            <MenuItem>Loading</MenuItem>
          ) : (
            <>
            {showProductList()}
            </>
          )}
        </Menu>
      </Paper>


      <DashboardNavbarRoot
        sx={{
          left: {
            lg: 280
          },
          width: {
            lg: 'calc(100% - 280px)'
          }
        }}
        {...other}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2
          }}
        >
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: 'inline-flex',
                lg: 'none'
              }
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Tooltip title="Notifications">
            <IconButton onClick={handleClick} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}  sx={{ ml: 6, mr: 4 }}>
                <Badge
                  badgeContent={4}
                  color="primary"
                  variant="dot"
                >
                <BellIcon fontSize="small" />
              </Badge>
            </IconButton>
          </Tooltip>
            <Avatar
            sx={{
              height: 40,
              ml: 20,
              width: 40,
              ml: 1
            }} onClick={redirect} sx={{ cursor: 'pointer' }} alt={User.displayName} src={User.photoURL} 
            />
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  );
};

DashboardNavbar.propTypes = {
  onSidebarOpen: PropTypes.func
};
