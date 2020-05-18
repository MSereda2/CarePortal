import React from 'react';
import style from './task-page-filter.module.scss';

const TaskPageFilter = (props) => {

  return(
    <div className={style.taskPageFilter}>
      <div className={style.taskPageFilter__items}>
        <p>По дате</p>
        <p>По цене</p>
        <p>Покаместь не знаю</p>
      </div>
      <div>
        <span><i>x</i></span>
      </div>
    </div>
  )
}

export default TaskPageFilter;