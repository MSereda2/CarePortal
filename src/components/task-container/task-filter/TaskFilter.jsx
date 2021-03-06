import React from 'react';
import style from './taskFilter.module.css';

let TaskFilter = (props) => {

    return(
        <div className={style.taskFilter}>
           <h2 className={style.counter}>Всего заданий в Краснодаре <span>{props.task.length}</span></h2>
        </div>
    )
}

export default TaskFilter;