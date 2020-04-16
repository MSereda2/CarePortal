// Packages
import React from 'react';
import { connect} from 'react-redux';
import {compose} from 'redux';


// Style
import style from './CreateTask.module.scss';

// Components
import CreateTaskForm from './CreateTaskForm/CreateTaskForm';

// Actions
import {addTask} from '../../redux/reducers/tasks/task_actions';

// Thunk
import {CreateTaskThunkCreator} from '../../redux/reducers/tasks/task_thunk';





let CreateTask = (props) => {

    const onSubmit = async (FormData) => {
        props.CreateTaskThunkCreator(FormData, props.UserData)
       
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
    connect(MapStateToProps, {CreateTaskThunkCreator}),
)(CreateTask);