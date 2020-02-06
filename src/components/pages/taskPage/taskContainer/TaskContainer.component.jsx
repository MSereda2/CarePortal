import React from "react";
import style from "./taskContainer.module.css";

import TaskItem from "./taskItem/TaskItem.component";

const TaskContainer = props => {
  return (
    <div className={`${style.task_container}`}>
      <div className={style.filter_wrapper}>
        <div className={style.filter_box}>
          <div className={style.form_group}>
            <span>
              <i className="fa fa-search"></i>
            </span>
            <input
              className={style.form_field}
              type="text"
              placeholder="Поиск задания"
            />
          </div>
          <button className={style.filterMap}>
            <i className="fa fa-map"></i>Город
          </button>
          <button className={style.filter}>
            <i className="fa fa-book"></i>Фильтер
          </button>
        </div>
        <p className={style.searchResult}>
          <span className={style.counterTasks}>5 task</span> в Krasnodar,
          Russian
        </p>
      </div>
      <div className={style.task_list}>
        {props.taskList.map(task => (
          <TaskItem
            img={task.img}
            userName={task.userName}
            description={task.description}
            title={task.title}
            cost={task.cost}
            data={task.data}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskContainer;
