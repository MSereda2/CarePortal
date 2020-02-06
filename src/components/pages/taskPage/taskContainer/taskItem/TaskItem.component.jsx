import React from 'react';
import style from './taskItem.module.css';

import { connect } from "react-redux";


const TaskItem = (props) => {
   return(
    <div className={style.task_item}>
        <img className={style.icon_task} src={props.img} alt=""/>
        <div className={style.container}>
            <div className={style.userContainer}>
                    <p className={style.task_userName}>{props.userName}</p>
                    <button className={style.taskRecomend}><i className='fa fa-star'></i></button>
                    <button className={style.newbie}><i className='fa fa-heart'></i></button>
                </div>
            <div className={style.taskBody}>
                    <div className={style.taskItself}> 
                        <p className={style.task_title}>{props.title}</p>
                        <a className={style.taskLocation}>{props.description}</a>
                    </div>
                    <div className={style.costContainer}>
                        <span className={style.cost}>{props.cost} &#8381;</span>
                        <span className={style.data}>{props.data}</span>
                    </div>
                </div>
        </div>
       
    </div>
   )
}

export default TaskItem;