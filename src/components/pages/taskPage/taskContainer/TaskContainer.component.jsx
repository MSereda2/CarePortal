import React from "react";
import style from "./taskContainer.module.css";

import TaskItem from "./taskItem/TaskItem.component";

import { DataSearch, ReactiveList, ResultList } from '@appbaseio/reactivesearch';


const TaskContainer = props => {
  return (
    <div className={`${style.task_container}`}>
      <div className={style.task_list}>
      
      </div>
    </div>
  );
};

export default TaskContainer;





// {props.taskList.map(task => (
//   <TaskItem
//     img={task.img}
//     userName={task.userName}
//     description={task.description}
//     map={task.distance}
//     timer={task.timer}
//     title={task.title}
//     cost={task.cost}
//     data={task.data}
//   />
// ))}