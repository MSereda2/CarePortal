import React, { Component } from "react";
import style from "./App.css";
import Grid from '@material-ui/core/Grid';


// Components
import Nav from './components/Nav/Nav';
import TaskContainer from './components/TaskContainer/TaskContainer';
import MapContainer from './components/MapContainer/MapContainer';



function App(props) {

  return (
          <Grid container>
            <Grid item xs={12}>
              <Nav />
            </Grid>
            <Grid item xs={5}>
                <TaskContainer />
            </Grid>
            <Grid item xs={7}>
                <MapContainer />
            </Grid>
          </Grid >
        
  );
}


export default App;
