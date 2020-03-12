import React from 'react';
import style from './taskList.module.css';

import {connect} from 'react-redux';

// Components
import TaskItem from './taskItem/TaskItem';






class TaskList extends React.Component {

    render() {

        return(
           <div className={style.taskList}>
              {/* <TaskItem taskTitle={'Подмести двор'} taskDescription={'Я работаю 24/7 по этому нет времени следить за порядком, если вы подметете хорошо, можно договориться для постоянной работы.'} taskCost={'150р'} taskTime={'3 ч.'} img={user1} /> */}
              {this.props.tasks.map(task => (
                  <TaskItem taskTitle={task.title} taskDescription={task.description} taskCost={task.cost} taskTime={task.time} img={task.img} />
              ))}
              
           </div>
        )
    }
}

let mapStateToProps = (state) => ({
    tasks: state.task.task
})

export default connect(mapStateToProps, {})(TaskList);