import React from 'react';
import style from './taskContainer.module.css';

import TaskItem from './taskItem/TaskItem.component';
import DropDown from '../dropdown/dd.component';

const Task_container = (props) => {
    return(
        <div className={style.task_container}>
            <DropDown title="all task" list={this.state.location} />
            <div className={style.task_list}>
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            </div>
        </div>
    )
}

export default Task_container;