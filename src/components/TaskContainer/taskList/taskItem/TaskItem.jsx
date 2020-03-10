
import React from 'react';
import style from './taskItem.module.css';

import clock from '../../../../assets/clock.png'

// Components
import CircleImg from '../../../common/circleImg/CircleImg';

let TaskItem = (props) => (
    <div className={style.taskItem}>
             <CircleImg img={props.img} />
             <div className={style.taskInfo}>
                 <h4 className={style.taskTitle}>{props.taskTitle}</h4>
                 <p className={style.taskDescription}>{props.taskDescription}</p>
             </div>
             <div className={style.taskOrder}>
                 <div>
                     <p className={style.taskCost}>{props.taskCost}</p>
                     <p className={style.taskTime}>{props.taskTime}<img src={clock} className={style.clock} /> </p>
                 </div>
                 <a className={style.btn}>Начать</a>
             </div>
     </div>
)

export default TaskItem;