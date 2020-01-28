import React, {Component} from 'react';
import './App.css';

// COMPONENTS
import Nav from './components/nav/nav.component';
import TaskContainer from './components/taskContainer/TaskContainer.component';
import Map from './components/map/Map.component';
import SideBar from './components/nav/sidebar/SideNav';


function App(props) {
    return(
        <div className="container">
            <Nav state={props.store.getState()} dispatch={props.dispatch} />
            <SideBar />
            <TaskContainer stateTask={props.store.getState().createTask.taskContainer} />
            <Map defult={props.store.getState().map} />
        </div>
    ) 
}
   
export default App;