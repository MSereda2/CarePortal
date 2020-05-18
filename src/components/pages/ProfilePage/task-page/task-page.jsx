import React from 'react';
import style from './task-page.module.scss';

// Components
import TaskPageHeader from './task-page-header/task-page-header.component';
import TaskPageFilter from './task-page-filter/task-page-filter.component';
// import TaskPageItem from './task-page-item/task-page-item.component';
import TaskPageItem from '../../../task-container/taskList/task-item/TaskItem';

const TaskPage = (props) => {

  return (
    <div className={style.taskPage}>
      <TaskPageHeader />
      <TaskPageFilter />
      <div className={style.taskPage__grid}>
        <div className={style.taskPage__item}>
          <TaskPageItem cost="100" description="blblblblblb" id="1" photoURL="https://upload.wikimedia.org/wikipedia/commons/9/9c/Megan_Fox_in_2019.jpg" time="5h" title="test" />
        </div>
      </div>


    </div>
  )
}

export default TaskPage;