import React from 'react';
import style from './taskList.module.css';

import {connect} from 'react-redux';


// Components
import TaskItem from './taskItem/TaskItem';


class TaskList extends React.Component {

    render() {

        return(
           <div className={style.taskList}>
              {this.props.task.map(task => (
                  <TaskItem
                    key={task.id}
                    id={task.id}
                    taskTitle={task.title}
                    taskDescription={task.description}
                    taskCost={task.cost}
                    taskTime={task.time}
                    img={task.img}
                    isShowModal={task.isShowModal}
                    closeModal={this.props.closeModal}
                    showModal={this.props.showModal}
                     />
              ))}
              
           </div>
        )
    }
}



export default TaskList;