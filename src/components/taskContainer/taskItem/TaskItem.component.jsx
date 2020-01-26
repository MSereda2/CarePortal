import React from 'react';
import style from './taskItem.module.css';

const TaskItem = (props) => {
   return(
    <div className={style.task_item}>
        <img className={style.icon_task} src={props.img} alt=""/>
        <div className={style.container}>
           
                <div className={style.userContainer}>
                    <p className={style.task_userName}>{props.userName}</p>
                    <button className={style.taskRecomend}><i className='fa fa-star'></i>{props.recomedation}</button>
                    <button className={style.newbie}><i className='fa fa-heart'></i>{props.newbie}</button>
                </div>
                <div className={style.taskBody}>
                    <div className={style.taskItself}> 
                        <p className={style.task_title}>{props.title}</p>
                    <p className={style.taskLocation}>{props.location}</p>
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