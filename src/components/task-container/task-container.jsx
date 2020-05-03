import React from 'react';
import style from './taskContainer.module.scss';

// Components
import TaskFilter from './task-filter/TaskFilter';
import TaskList from './taskList/TaskList';

class TaskContainer extends React.Component {

    render() {
        return(
           <div className={style.taskContainer}>
              <TaskFilter {...this.props} />
              <TaskList {...this.props} />
            </div>
        )
    }
}

export default TaskContainer;