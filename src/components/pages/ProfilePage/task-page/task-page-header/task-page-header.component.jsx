import React from 'react';
import style from './task-page-header.module.scss';

const TaskPageHeader = (props) => {

  return(
    <div className={style.header}>
      <h2 className={style.header__title}>List Task</h2>
      <div className={style.header__view}>
        <span><i>x</i></span>
        <span><i>x</i></span>
      </div>
    </div>
  )
}

export default TaskPageHeader;