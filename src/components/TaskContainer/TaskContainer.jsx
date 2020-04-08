import React from 'react';
import style from './taskContainer.module.scss';

// Components
import TaskFilter from './taskFilter/TaskFilter';
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