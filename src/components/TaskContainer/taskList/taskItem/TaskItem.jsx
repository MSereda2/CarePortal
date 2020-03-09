
import React from 'react';
import style from './taskItem.module.css';

import user1 from '../../../../assets/user1.jpg';
import clock from '../../../../assets/clock.png'

// Components
import CircleImg from '../../../common/circleImg/CircleImg';

let TaskItem = () => (
    <div className={style.taskItem}>
             <CircleImg img={user1} />
             <div className={style.taskInfo}>
                 <h4 className={style.taskTitle}>Подмести двор</h4>
                 <p className={style.taskDescription}>Я работаю 24/7 по этому нет времени следить за порядком, если вы подметете хорошо, можно договориться для постоянной работы.</p>
                 <p className={style.taskLocation}>Это задание в 500м от вас</p>
             </div>
             <div className={style.taskOrder}>
                 <div>
                     <p className={style.taskCost}>350р</p>
                     <p className={style.taskTime}>3ч.<img src={clock} className={style.clock} /> </p>
                 </div>
                 <a className={style.btn}>Начать</a>
             </div>
     </div>
)

export default TaskItem;