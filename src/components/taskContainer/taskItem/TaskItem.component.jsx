import React from 'react';
import style from './taskItem.module.css';

const TaskItem = (props) => {
   return(
    <div className={style.task_item}>
        {/* <div className={style.icon_task}>
            <i className="fa fa-user icon_task"></i>
        </div> */}
        <img className={style.icon_task} src="https://sun9-3.userapi.com/c204816/v204816797/1a6d8/_YC8SmVkK-s.jpg" alt=""/>
        <p>Научить соблазнению</p>
        <span className={style.cost}><i className='fa fa-money'></i>300р</span>
    </div>
   )
}

export default TaskItem;