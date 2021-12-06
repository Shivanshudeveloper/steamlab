import React, { useState } from "react";

import { Helmet } from "react-helmet";
import { v4 as uuid } from "uuid";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  IconButton,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import OrderDetails from "./dashboard/OrderDetails";
import SearchIcon from "@material-ui/icons/Search";
import PropTypes from "prop-types";

const Orders = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const orders = [
    {
      id: uuid(),
      ref: "CDD1049",
      amount: 30.5,
      customer: {
        name: "Ekaterina Tankova",
      },
      createdAt: 1555016400000,
      status: "Pending",
      color: ""
    },
    {
      id: uuid(),
      ref: "CDD1048",
      amount: 25.1,
      customer: {
        name: "Cao Yu",
      },
      createdAt: 1555016400000,
      status: "Delivered",
      color: "success"
    },
    {
      id: uuid(),
      ref: "CDD1047",
      amount: 10.99,
      customer: {
        name: "Alexa Richardson",
      },
      createdAt: 1554930000000,
      status: "Refunded",
      color: "error"
    },
    {
      id: uuid(),
      ref: "CDD1046",
      amount: 96.43,
      customer: {
        name: "Anje Keizer",
      },
      createdAt: 1554757200000,
      status: "Pending",
      color: ""
    },
    {
      id: uuid(),
      ref: "CDD1045",
      amount: 32.54,
      customer: {
        name: "Clarke Gillebert",
      },
      createdAt: 1554670800000,
      status: "Delivered",
      color: "success"
    },
    {
      id: uuid(),
      ref: "CDD1044",
      amount: 16.76,
      customer: {
        name: "Adam Denisov",
      },
      createdAt: 1554670800000,
      status: "Delivered",
      color: "success"
    },
  ];

  return (
    <>
      <Helmet>
        <title>Customers | Client Portal</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100%",
          padding: "30px",
        }}
      >
        <Container maxWidth={false}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" sx={{ my: "20px" }}>
              Orders
            </Typography>
            <div>
              <TextField label="Search" variant="filled" size="small" />
              <IconButton>
                <SearchIcon />
              </IconButton>
            </div>
          </div>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <AppBar
                position="static"
                style={{ background: "transparent", boxShadow: "none" }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="simple tabs example"
                >
                  <Tab label="All" {...a11yProps(0)} />
                  <Tab label="Pending" {...a11yProps(1)} />
                  <Tab label="Submitted" {...a11yProps(2)} />
                  <Tab label="Working" {...a11yProps(3)} />
                  <Tab label="Complete" {...a11yProps(4)} />
                </Tabs>
              </AppBar>
              <TabPanel value={value} index={0}>
                <OrderDetails orders={orders} />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <OrderDetails orders={orders.slice(0, 2)} />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <OrderDetails orders={orders.slice(3, 4)} />
              </TabPanel>
              <TabPanel value={value} index={3}>
                <OrderDetails orders={orders.slice(1, 2)} />
              </TabPanel>
              <TabPanel value={value} index={4}>
                <OrderDetails orders={orders.slice(2, 4)} />
              </TabPanel>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Orders;
