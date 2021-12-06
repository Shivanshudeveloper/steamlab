import React, { useState } from "react";

import { Helmet } from "react-helmet";
import {
  Box,
  Container,
  Card,
  Typography,
  Grid,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const Services = () => {
  const [value, setValue] = useState("How many words?");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
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
              Services
            </Typography>
            <Button size="small" variant="contained" sx={{ p: "9px" }}>
              View Cart | 0
            </Button>
          </div>
          <Grid container spacing={3}>
            <Grid item md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Subscription Packages</Typography>
                  <Typography
                    variant="subtitle2"
                    style={{ marginTop: "15px", color: "grey" }}
                  >
                    Select services and choose "Move to folder" from the bulk
                    actions menu to organize them.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Grid container spacing={3} sx={{ mt: "15px" }}>
            <Grid item md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardContent>
                  <Typography variant="h5">Link Building</Typography>
                  <Typography
                    variant="subtitle2"
                    style={{ marginTop: "15px", color: "grey" }}
                  >
                    This is a regular one-time service with a fixed price.
                  </Typography>
                </CardContent>
                <CardActions
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    background: "#fcfcfe",
                  }}
                >
                  <Typography variant="subtitle2" style={{ color: "grey" }}>
                    $500.00
                  </Typography>
                  <Button size="small" variant="outlined">
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardContent>
                  <Typography variant="h5">Content Writing</Typography>
                  <Typography
                    variant="subtitle2"
                    style={{ marginTop: "15px", color: "grey" }}
                  >
                    This is a service with pricing variants. Just select how
                    many words you need and let us do the rest.
                  </Typography>
                  <FormControl
                    fullWidth
                    variant="outlined"
                    size="small"
                    sx={{ mt: 3 }}
                  >
                    
                    <Select value={value} onChange={handleChange} fullWidth>
                      <MenuItem value="How many words?" selected disabled>How many words?</MenuItem>
                      <MenuItem value={1000}>1000 words</MenuItem>
                      <MenuItem value={1500}>1500 words</MenuItem>
                      <MenuItem value={2000}>2000 words</MenuItem>
                    </Select>
                  </FormControl>
                </CardContent>
                <CardActions
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    background: "#fcfcfe",
                  }}
                >
                  <Typography variant="subtitle2" style={{ color: "grey" }}>
                    $200.00 – $350.00
                  </Typography>
                  <Button size="small" variant="outlined">
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardContent>
                  <Typography variant="h5">Unlimited Requests</Typography>
                  <Typography
                    variant="subtitle2"
                    style={{ marginTop: "15px", color: "grey" }}
                  >
                    This is a request-based service. As long as you have an
                    active subscription you can request new tasks for the team
                    to work on.
                  </Typography>
                </CardContent>
                <CardActions
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    background: "#fcfcfe",
                  }}
                >
                  <Typography variant="subtitle2" style={{ color: "grey" }}>
                    $1,000.00/month
                  </Typography>
                  <Button size="small" variant="outlined">
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Services;
