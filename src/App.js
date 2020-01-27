import React, {Component} from 'react';
import './App.css';

// COMPONENTS
import Nav from './components/nav/nav.component';
import TaskContainer from './components/taskContainer/TaskContainer.component';
import WrapperMap from './components/map/Map.component';
import SideBar from './components/nav/sidebar/SideNav';


function App(props) {
    return(
        <div className="container">
            <Nav stateNav={props.state.nav}  taskFun={props.state.taskContainer} />
            <SideBar />
            <TaskContainer stateTask={props.state.taskContainer} />
            <WrapperMap
             googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
             loadingElement={<div style={{height: '100%'}}></div>}
             containerElement={<div style={{height: '100%'}}></div>}
             mapElement={<div style={{height: '100%'}}></div>}>
            </WrapperMap>  
        </div>
    ) 
}
   
export default App;