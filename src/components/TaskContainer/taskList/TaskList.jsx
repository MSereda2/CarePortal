import React from 'react';
import style from './taskList.module.css';

import {connect} from 'react-redux';


// Components
import TaskItem from './taskItem/TaskItem';

// Actions
import {showModal, closeModal} from '../../../redux/reducers/tasks/task_actions';


class TaskList extends React.Component {

    render() {

        return(
           <div className={style.taskList}>
              {this.props.tasks.map(task => (
                  <TaskItem
                    key={task.id}
                    id={task.id}
                    taskTitle={task.title}
                    taskDescription={task.description}
                    taskCost={task.cost + 'р'}
                    taskTime={task.time + 'ч'}
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

let mapStateToProps = (state) => ({
    tasks: state.task.task,
})

export default connect(mapStateToProps, {showModal, closeModal})(TaskList);