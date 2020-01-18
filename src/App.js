import React, {Component} from 'react';
import './App.css';
// COMPONENTS
import Nav from './components/nav/nav.component';
import TaskContainer from './components/taskContainer/TaskContainer.component';
import Map from './components/map/Map.component';

function App() {
    return(
        <div className="container">
            <Nav />
            <TaskContainer />
            <Map  />
        </div>
    ) 
}
   
export default App;