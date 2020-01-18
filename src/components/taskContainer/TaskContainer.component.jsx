import React from 'react';
import style from './taskContainer.module.css';

import TaskItem from './taskItem/TaskItem.component';

const Task_container = (props) => {
    return(
        <div className={style.task_container}>
            <div className={style.top}>
                <h1 className={style.heading}>Список заданий</h1>
            </div>
            <div className={style.task_list}>
            <div className={style.table}>
                <p>Автор</p>
                <p>Задание</p>
                <p>Цена</p>
            </div>
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