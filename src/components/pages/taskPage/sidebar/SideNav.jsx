import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { red } from '@material-ui/core/colors';

import { MultiList, RatingsFilter, RangeSlider } from '@appbaseio/reactivesearch';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      color: red,
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
    },
    list: {
      width: '22vw'
    }
  }));

const SideBar = (props) => {
    const classes = useStyles();

    return(
      <Grid container>
        <Grid className={classes.paper} item xs={12} sm={6}>
        <MultiList
            className={classes.list}
            dataField="currency.keyword"
            title="Currency Options"
            componentId="currencyReactor"
            placeholder="Filter Currency"
            showFilter={true}
            filterLabel="Currency Options"
            react={{
              and: [
                "nameReactor",
              ]
            }}
            renderError={error => (
              <div>
                Something went wrong with Currency MultiList
                <br />
                Error details
                <br />
                {error}
              </div>
            )}/>
              <RangeSlider
            className={classes.list}
            componentId="RangeSliderSensor"
            dataField="average_cost_for_two"
            title="Average Cost for Two"
            range={{
              start: 0,
              end: 7000
            }}
            rangeLabels={{
              start: "Low",
              end: "High"
            }}
            react={{
              and: ["cuisineReactor", "currencyReactor"]
            }}
            renderError={error => (
              <div>
                Something went wrong with RangeSlider
                <br />
                Error details
                <br />
                {error}
              </div>)}/>
        <RatingsFilter
            className={classes.list}
            componentId="ratingsReactor"
            dataField="rating"
            title="Avg. Customer Reviews"
            data={[
              { start: 4, end: 5, label: ">= 4 stars" },
              { start: 3, end: 5, label: ">= 3 stars" },
              { start: 2, end: 5, label: ">= 2 stars" },
              { start: 1, end: 5, label: "> 1 stars" }
            ]}
            showFilter={true}
            filterLabel="Avg. Customer Reviews"
            react={{
              and: [""]
            }}
            renderError={error => (
              <div>
                Something went wrong with RatingsFilter
                <br />
                Error details
                <br />
                {error}
              </div>
            )}/>
        </Grid>
      </Grid>
    )
    
}

export default SideBar;