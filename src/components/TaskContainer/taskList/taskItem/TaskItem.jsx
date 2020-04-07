
import React from 'react';
import style from './taskItem.module.scss';


import clock from '../../../../assets/clock.png'

// Components
import CircleImg from '../../../common/CircleImg/CircleImg';
import TaskModal from '../../TaskModal/TaskModal';

let TaskItem = (props) => (
    <>
        <div className={style.taskItem} onClick={() => {props.showModal(props.id)}}>
                <CircleImg img={props.img} />
                <div className={style.taskInfo}>
                    <h4 className={style.taskTitle}>{props.title}</h4>
                    <p className={style.taskDescription}>{props.description}</p>
                    <p className={style.taskLocation}>Задание в 400м</p>

                </div>
                <div className={style.taskOrder}>
                    <div>
                        <p className={style.taskCost}>{props.cost}<span>₽</span></p>
                        <p className={style.taskTime}>{props.time}ч. <img src={clock} className={style.clock} alt='icon clock' /> </p>
                    </div>
                    <button className={style.btn}>Начать <i className='fa fa-play'></i></button>
                </div>
        </div>
        <TaskModal {...props} />
   </>
)

export default TaskItem;