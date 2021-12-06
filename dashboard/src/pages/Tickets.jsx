import { Helmet } from "react-helmet";
import {
  Box,
  Container,
  Paper,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

const tickets = [];

const Tickets = () => (
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
            Tickets
          </Typography>
          <Button size="small" variant="contained">
            New Ticket
          </Button>
        </div>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>SUBJECT</TableCell>
                <TableCell>DATE</TableCell>
                <TableCell align="right">STATUS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tickets.length > 0 ? (
                tickets?.map((ticket) => (
                  <TableRow hover key={ticket.id}>
                    <TableCell style={{ color: "blue" }}>
                      {ticket.ref}
                    </TableCell>
                    <TableCell>{ticket.customer.name}</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                ))
              ) : (
                <Typography variant="subtitle2" sx={{ p: 2 }}>
                  No tickets...
                </Typography>
              )}
            </TableBody>
          </Table>
        </Paper>
      </Container>
    </Box>
  </>
);

export default Tickets;
