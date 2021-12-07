import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import CloudDoneRounded from '@material-ui/icons/CloudDoneRounded';
import { red } from '@material-ui/core/colors';

const Budget = (props) => {
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
              backgroundColor: red,
              height: 56,
              width: 56
            }}
          >
            <CloudDoneRounded />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
  );
};

export default Budget

