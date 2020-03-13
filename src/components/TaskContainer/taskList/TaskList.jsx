import React from 'react';
import style from './taskList.module.css';

import {connect} from 'react-redux';

// Components
import TaskItem from './taskItem/TaskItem';


class TaskList extends React.Component {

    render() {

        return(
           <div className={style.taskList}>
              {this.props.tasks.map(task => (
                  <TaskItem taskTitle={task.title} taskDescription={task.description} taskCost={task.cost + 'р'} taskTime={task.time + 'ч'} img={task.img} />
              ))}
              
           </div>
        )
    }
}

let mapStateToProps = (state) => ({
    tasks: state.task.task,
    showModal: state.task.showModal
})

export default connect(mapStateToProps, {})(TaskList);