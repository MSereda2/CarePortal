import React from 'react';
import {connect} from 'react-redux';
import style from './taskPage.module.css';

import SideBar from "./sidebar/SideNav";
import TaskContainer from './taskContainer/TaskContainer.component';
import WrapperMap from './mapContainer/MapContainer';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const TaskPage = (props) => {
    return(
        <Grid container>
          <Grid item xs={12} sm={3}>
              <SideBar />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TaskContainer taskList={props.taskList} />
          </Grid>
          <Grid item xs={12} sm={5}>
            <WrapperMap  />;
          </Grid>
        </Grid>
    )
}

const mapStateToProps = (state) => (
  {
    taskList: state.taskPage.taskContainer.taskList,
  }
)


// const mapDispatchToProps = (dispatch) => {

// }

export default connect(mapStateToProps,null)(TaskPage);