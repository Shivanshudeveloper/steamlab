import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import CloudDone from '@mui/icons-material/CloudDone';

export const Budget = (props) => {
  return (
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
            FILES UPLOADED
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {props.filesuploaded}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'error.main',
              height: 56,
              width: 56
            }}
          >
            <CloudDone />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
  );
};
