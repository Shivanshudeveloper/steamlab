import React from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container, Grid, CircularProgress } from '@material-ui/core';
import Budget from '../components/dashboard/Budget';
import LatestOrders from '../components/dashboard/LatestOrders';
import LatestProducts from '../components/dashboard/LatestProducts';
import Sales from '../components/dashboard/Sales';
import TasksProgress from '../components/dashboard/TasksProgress';
import TotalCustomers from '../components/dashboard/TotalCustomers';
import TotalProfit from '../components/dashboard/TotalProfit';
import TrafficByDevice from '../components/dashboard/TrafficByDevice';
import axios from 'axios';

import {
    Chart,
    BarSeries,
    Title,
    ArgumentAxis,
    ValueAxis,
} from '@devexpress/dx-react-chart-bootstrap4';
import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';
import { Animation } from '@devexpress/dx-react-chart';
import { API_SERVICE } from '../config/URI';

const Analytics = () => {
    const [loading, setloading] = React.useState(true);
    const [statsdata, setstatsdata] = React.useState({});
    const [datachart, setdatachart] = React.useState([]);

    React.useEffect(() => {
        const chartData = [];
        var email = sessionStorage.getItem("userEmail");
        axios
            .get(`${API_SERVICE}/api/v1/main/getstatsfileuploadtoserver/admin`)
            .then((response) => {
                var obj = response.data;
                console.log(obj);
                for (const object in obj) {
                    if ( object === "totalfileuploaded" ) {
                    var temp = {
                        year: 'File Uploaded',
                        population: obj[object]
                    };
                    chartData.push(temp);
                    } else if ( object === "totalfiledelivered" ) {
                    var temp = {
                        year: 'File Delivered',
                        population: obj[object]
                    };
                    chartData.push(temp);
                    } else if ( object === "totalfileinvoiced" ) {
                    var temp = {
                        year: 'File Invoiced',
                        population: obj[object]
                    };
                    chartData.push(temp);
                    } else if ( object === "totalfileinprocess" ) {
                    var temp = {
                        year: 'File In Process',
                        population: obj[object]
                    };
                    chartData.push(temp);
                    }
                }
                setdatachart(chartData);
                setstatsdata(response.data);
                setloading(false);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
  <>
    <Helmet>
      <title>Analytics</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
            {loading === true ? (
            <center style={{ marginTop: "8%" }}>
                <CircularProgress color="primary" />
            </center>
            ) : (
                <>
                    <Grid
                    container
                    spacing={3}
                    >
                    <Grid
                            item
                            lg={3}
                            sm={6}
                            xl={3}
                            xs={12}
                        >
                            <Budget filesuploaded={statsdata.totalfileuploaded} />
                        </Grid>
                        <Grid
                            item
                            xl={3}
                            lg={3}
                            sm={6}
                            xs={12}
                        >
                            <TotalCustomers filesdelivered={statsdata.totalfiledelivered} />
                        </Grid>
                        <Grid
                            item
                            xl={3}
                            lg={3}
                            sm={6}
                            xs={12}
                        >
                            <TasksProgress filesinvoiced={statsdata.totalfileinvoiced} />
                        </Grid>
                        <Grid
                            item
                            xl={3}
                            lg={3}
                            sm={6}
                            xs={12}
                        >
                            <TotalProfit filesinprocess={statsdata.totalfileinprocess} sx={{ height: '100%' }} />
                        </Grid>
                        <Grid sx={{ mt: 4 }} xs={12} >
                            <Chart
                            data={datachart}
                            >
                            <ArgumentAxis />
                            <ValueAxis max={7} />

                            <BarSeries
                                valueField="population"
                                argumentField="year"
                            />
                            <Title text="Files Data" />
                            <Animation />
                            </Chart>
                        </Grid>
                    </Grid>
                </>
            )}
      </Container>
    </Box>
  </>
    );
};

export default Analytics;
