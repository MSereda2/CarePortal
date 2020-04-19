// Packages
import React from 'react';
import { connect} from 'react-redux';
import {compose} from 'redux';


// Style
import style from './CreateTask.module.scss';

// Components
import CreateTaskForm from './CreateTaskForm/CreateTaskForm';

// HOC
import WithSpiner from '../HOC/withSpiner/withSpiner';

// Thunk
import {CreateTaskThunkCreator} from '../../redux/reducers/tasks/task_thunk';


let CreateTask = (props) => {

    const onSubmit = async (FormData) => {
        props.CreateTaskThunkCreator(FormData, props.UserData)
       
    }

    return(
        <div className={style.createTask}>
            <div className={style.leftColumn}>
                <CreateTaskForm isFetching={props.isFetching} onSubmit={onSubmit} />   
            </div>
            <div className={style.rightColumn}>
            </div>
        </div>
    )
}

const MapStateToProps = (state) => ({
    UserData: state.login,
    isFetching: state.task.isFetching
})

export default compose(
    connect(MapStateToProps, {CreateTaskThunkCreator}),
    WithSpiner
)(CreateTask);