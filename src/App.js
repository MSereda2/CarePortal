import React, {Component} from 'react';
import './App.css';

// COMPONENTS
import Nav from './components/nav/nav.component';
import TaskContainer from './components/taskContainer/TaskContainer.component';
import WrapperMap from './components/map/Map.component';


function App(props) {
    return(
        <div className="container">
            <Nav stateNav={props.state.nav}  taskFun={props.state.taskContainer} />
            <TaskContainer stateTask={props.state.taskContainer} />
            <WrapperMap >></WrapperMap>  
        </div>
    ) 
}
   
export default App;