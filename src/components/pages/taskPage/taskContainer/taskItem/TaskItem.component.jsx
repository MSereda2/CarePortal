import React from 'react';
import style from './taskItem.module.css';

import { connect } from "react-redux";


const TaskItem = (props) => {
   return(
    <div className={style.task_item}>
        <img className={style.icon_task} src={props.img} alt=""/>
        <div className={style.container}>
            <div className={style.taskBody}>
                <div className={style.taskItself}> 
                    <p className={style.task_title}>{props.title}</p>
                    <span className={style.mapIcon}><i className="fa fa-map"></i>300м</span>
                    <span className={style.mapIcon}><i className="fa fa-hourglass-start"></i>18: 09</span>
                </div>
                <div className={style.costContainer}>
                    <span className={style.cost}>{props.cost} &#8381;</span>
                    <a className={style.taskDescription}>{props.description}</a>
                </div>
            </div>
        </div>
       
    </div>
   )
}

export default TaskItem;