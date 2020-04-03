// Packages
import React from 'react';
import { connect} from 'react-redux';
import {compose} from 'redux';
import PlacesAutocomplete, {  geocodeByAddress,  getLatLng, } from 'react-places-autocomplete';


// Style
import style from './CreateTask.module.scss';

// Components

import CreateTaskForm from './CreateTaskForm/CreateTaskForm';

// Actions
import {addTask} from '../../redux/reducers/tasks/task_actions';


let CreateTask = (props) => {

    const onSubmit = async (FormData) => {
        let results = await geocodeByAddress(FormData.coordinates);
        let coordinates = await getLatLng(results[0]);
        props.addTask(FormData, coordinates, props.UserData)
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