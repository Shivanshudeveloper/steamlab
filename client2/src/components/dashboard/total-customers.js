import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import DoorBack from '@mui/icons-material/DoorBack';

export const TotalCustomers = (props) => (
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            Fichiers livrés
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {props.filesdelivered}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'success.main',
              height: 56,
              width: 56
            }}
          >
            <DoorBack />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
