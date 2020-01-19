import React from 'react';
import style from './taskItem.module.css';

const TaskItem = (props) => {
   return(
    <div className={style.task_item}>
        <img className={style.icon_task} src={props.img} alt=""/>
        <div className={style.container}>
            <div className={style.left_block}>
                <p className={style.task_title}>{props.title}</p>
                <div className={style.block_icon}>
                <span> <i className='fa fa-music'></i>{props.time}</span>
                    <span> <i className='fa fa-map'></i>{props.data}</span>
                </div>
            </div>
            <div className={style.right_block}>
            <span className={style.cost}><i className='fa fa-money'></i>{props.cost}</span>
                <a href="#">Подробней</a>
            </div>
        </div>
       
    </div>
   )
}

export default TaskItem;