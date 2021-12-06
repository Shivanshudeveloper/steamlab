import { Helmet } from "react-helmet";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import LatestOrders from "./dashboard/LatestOrders";
import OrderStatus from "./dashboard/OrderStatus";
import SubscriptionOrders from "./dashboard/SubscriptionOrders";

const Dashboard = () => (
  <>
    <Helmet>
      <title>Dashboard | Client Portal</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100%",
        padding: "30px",
      }}
    >
      <Container maxWidth={false}>
        <Typography variant="h4" sx={{ my: "20px" }}>
          Welcome, User!
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <OrderStatus sx={{ height: "100%" }} />
          </Grid>
        </Grid>

        <Typography variant="h4" sx={{ my: "20px" }}>
          Recent Orders
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <LatestOrders />
          </Grid>
        </Grid>

        <Typography variant="h4" sx={{ my: "20px" }}>
          Subscription Orders
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <SubscriptionOrders />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Dashboard;
