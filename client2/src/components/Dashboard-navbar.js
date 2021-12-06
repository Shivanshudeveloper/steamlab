import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { AppBar, Avatar, Badge, Box, IconButton, Toolbar, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Bell as BellIcon } from '../icons/bell';
import { UserCircle as UserCircleIcon } from '../icons/user-circle';
import { Users as UsersIcon } from '../icons/users';
import { useRouter } from 'next/router';

import { auth } from '../Firebase';


const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3]
}));

export const DashboardNavbar = (props) => {
  const router = useRouter();

  const { onSidebarOpen, ...other } = props;


  const [user, setuser] = React.useState(false);
  const [User, setUser] = React.useState({});


  React.useEffect(() => {
      auth.onAuthStateChanged(function(user) {
          if (user) {
            setuser(true);
            setUser(user);
            console.log(user);
          } else {
            router.push({
                pathname: '/login'
            });
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
            <IconButton sx={{ ml: 6, mr: 4 }}>
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
            }} onClick={logout} sx={{ cursor: 'pointer' }} alt={User.displayName} src={User.photoURL} 
            />
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  );
};

DashboardNavbar.propTypes = {
  onSidebarOpen: PropTypes.func
};
