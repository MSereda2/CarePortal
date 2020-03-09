import React from 'react';
import style from './taskList.module.css';

// Components
import TaskItem from './taskItem/TaskItem';

class TaskList extends React.Component {

    render() {

        return(
           <div className={style.taskList}>
              <TaskItem />
           </div>
        )
    }
}

export default TaskList;