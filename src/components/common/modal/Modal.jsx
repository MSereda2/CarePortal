import React from 'react';
import style from './modal.module.css';
import CircleImg from '../circleImg/CircleImg';

import ReactModal from 'react-modal';


let Modal = (props) => (
    <ReactModal
    className={style.content}
    isOpen={props.isShowModal} 
    onRequestClose={() => { props.closeModal(props.id) }}>

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
                    <p className={style.close_modal}>x</p>
                    <p className={style.showInformation}>Покозать информацию</p>
                </div>
            </div>
            <div className={style.task_info}>
                <div>
                    <h4 className={style.task_title}>{props.taskTitle}</h4>
                    <p className={style.task_description}>{props.taskDescription}</p>
                </div>
                <div>
                    <p className={style.task_cost}>150р</p>
                    <p className={style.task_time}>3ч.</p>
                </div>
                <a className={style.task_start} href="">Начать</a>
            </div>
        </div>
    </ReactModal>
)

export default Modal;