import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import FileUploadSharp from '@mui/icons-material/FileUploadSharp';

export const TotalProfit = (props) => (
  <Card {...props}>
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
            FILES IN PROCESS
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {props.filesinprocess}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'primary.main',
              height: 56,
              width: 56
            }}
          >
            <FileUploadSharp />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
