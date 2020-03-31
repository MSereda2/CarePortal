
import React from 'react';
import style from './taskItem.module.scss';


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
                        <p className={style.taskCost}>{props.taskCost}<span>₽</span></p>
                        <p className={style.taskTime}>{props.taskTime}ч. <img src={clock} className={style.clock} /> </p>
                    </div>
                    <a className={style.btn}>Начать <i className='fa fa-play'></i></a>
                </div>
        </div>


        <Modal taskModal {...props}>
        <div className={style.modal}>
            <div className={style.modal_profile}>
                <div className={style.profile_block}>
                    <CircleImg img={props.img} />
                    <div className={style.profile_info}>
                        <p className={style.profile_name}>Тимур Саникидзе</p>
                        <p className={style.profile_number}>+7(953) 088-55-33</p>
                        <p className={style.profile_sendMessage}>Написать сообщение</p>
                    </div>
                </div>
                <div className={style.profile_close}>
                    <p onClick={() => {props.closeModal(props.id)}} className={style.close_modal}>×</p>
                    <p className={style.showInformation}>Показать информацию</p>
                </div>
            </div>
            <div className={style.task_info}>
                <div>
                    <h4 className={style.task_title}>{props.taskTitle}</h4>
                    <p className={style.task_description}>{props.taskDescription}</p>
                </div>
                <div>
                    <p className={style.task_cost}>{props.taskCost}₽</p>
                    <p className={style.task_time}>{props.taskTime}.ч<img src={clock} /></p>
                </div>
                <a className={style.task_start} href="">Начать <i className='fa fa-play'></i> </a>
            </div>
        </div>
        </Modal>

   </>
)

export default TaskItem;