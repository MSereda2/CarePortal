import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { red } from '@material-ui/core/colors';

import { MultiList, RatingsFilter, RangeSlider, SingleList } from '@appbaseio/reactivesearch';



const SideBar = (props) => {

    return(
      <SingleList
      title="Places"
      componentId="places"
      dataField="place.raw"
      size={50}
      showSearch
    />     
    )
    
}

export default SideBar;