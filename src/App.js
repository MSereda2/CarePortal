import React, {Component} from 'react';
import './App.css';
// COMPONENTS
import Nav from './components/nav/nav.component';
import TaskContainer from './components/taskContainer/TaskContainer.component';
import MainMapBlock from './components/map/Map.component';
import WrapperMap from './components/map/Map.component';


function App() {
    return(
        <div className="container">
            <Nav />
            <TaskContainer />
            <WrapperMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC-IiT7wOM_QB-4nOft1xvrtM6K39NLrWY `} loadingElement={<div style={{ height: `100%` }} />}  containerElement={<div style={{ height: `90vh` }} />} mapElement={<div style={{ height: `100%` }} />}></WrapperMap>
        </div>
    ) 
}
   
export default App;