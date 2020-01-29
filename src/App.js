import React, {Component} from 'react';
import './App.css';

// COMPONENTS
import Nav from './components/nav/nav.component';
import TaskContainer from './components/taskContainer/TaskContainer.component';
import MyMap from './components/map/Map.component';
import SideBar from './components/nav/sidebar/SideNav';


function App(props) {
    return(
        <div className="container">
            <Nav state={props.store.getState()} dispatch={props.dispatch} />
            <SideBar />
            <TaskContainer stateTask={props.store.getState().createTask.taskContainer} />
            <MyMap defult={props.store.getState().map} dispatch={props.dispatch} />
        </div>
    ) 
}
   
export default App;