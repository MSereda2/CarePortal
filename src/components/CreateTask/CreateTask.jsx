// Packages
import React from 'react';
import { connect} from 'react-redux';
import {compose} from 'redux';
import {  geocodeByAddress,  getLatLng, } from 'react-places-autocomplete';
import uniqId from 'uniqid';

// Style
import style from './CreateTask.module.scss';

// Components
import CreateTaskForm from './CreateTaskForm/CreateTaskForm';

// Actions
import {addTask} from '../../redux/reducers/tasks/task_actions';

// // Thunk
// import {addTaskThunk} from '../../redux/reducers/tasks/task_thunk';

// Firebase
import {createTaskDocument} from '../../api/firebase/firebase.utils';



let CreateTask = (props) => {

    const onSubmit = async (FormData) => {
        let results = await geocodeByAddress(FormData.coordinates);
        let coordinates = await getLatLng(results[0]);
        createTaskDocument(FormData, coordinates, props.UserData, uniqId())
        // props.addTask(FormData, coordinates, props.UserData, uniqId());
    }

    return(
        <div className={style.createTask}>
            <div className={style.leftColumn}>
                <CreateTaskForm onSubmit={onSubmit} />   
            </div>
            <div className={style.rightColumn}>
            </div>
        </div>
    )
}

const MapStateToProps = (state) => ({
    UserData: state.login
})

export default compose(
    connect(MapStateToProps, {addTask}),
)(CreateTask);