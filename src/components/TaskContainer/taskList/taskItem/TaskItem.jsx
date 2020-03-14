
import React from 'react';
import style from './taskItem.module.css';


import clock from '../../../../assets/clock.png'

// Components
import CircleImg from '../../../common/circleImg/CircleImg';
import Modal from '../../../common/modal/Modal';


let TaskItem = (props) => (
    <>
        <div className={style.taskItem} onClick={() => {props.showModal(props.id)}}>
                <CircleImg img={props.img} />
                <div className={style.taskInfo}>
                    <h4 className={style.taskTitle}>{props.taskTitle}</h4>
                    <p className={style.taskDescription}>{props.taskDescription}</p>
                    <p className={style.taskLocation}>Задание в 400м</p>

                </div>
                <div className={style.taskOrder}>
                    <div>
                        <p className={style.taskCost}>{props.taskCost}</p>
                        <p className={style.taskTime}>{props.taskTime}<img src={clock} className={style.clock} /> </p>
                    </div>
                    <a className={style.btn}>Начать</a>
                </div>
        </div>
        <Modal 
          taskDescription={props.taskDescription}
          id={props.id}
          closeModal={props.closeModal}
          isShowModal={props.isShowModal}
          taskTitle={props.taskTitle} 
          img={props.img}
          />
   </>
)

export default TaskItem;