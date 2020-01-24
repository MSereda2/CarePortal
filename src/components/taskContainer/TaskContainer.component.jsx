import React from 'react';
import style from './taskContainer.module.css';

import TaskItem from './taskItem/TaskItem.component';

const Task_container = (props) => {
    return(
        <div className={style.task_container}>
            <div className={style.dd_wrapper}>
                <div className={style.dd_header}>
                  <h3 className={style.dd_header_title}>{props.stateTask.ddWrapper.ddHeader.title}</h3>
                  <i className={props.stateTask.ddWrapper.ddHeader.icon}></i>
                </div>
            </div>
            <div className={style.task_list}>
            {
                props.stateTask.taskItem.map(task => (
                    <TaskItem img={task.img} title={task.title} cost={task.cost} time={task.time}
                    data={task.data} />
                ))
            }
            </div>
        </div>
    )
}

export default Task_container;