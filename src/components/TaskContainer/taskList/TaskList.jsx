import React from 'react';
import style from './taskList.module.css';

// Components
import TaskItem from './task-item/TaskItem';


class TaskList extends React.Component {

    render() {

        return(
           <div className={style.taskList}>
              {this.props.task.map(task => ( <TaskItem key={task.id} {...task} {...this.props} />))}
           </div>
        )
    }
}



export default TaskList;