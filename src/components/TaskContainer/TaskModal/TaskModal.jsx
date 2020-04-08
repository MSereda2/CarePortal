import React from 'react';
import style from './taskModal.module.scss';
import CircleImg from '../../common/CircleImg/CircleImg';
import Modal from '../../common/modal/Modal';
import clock from '../../../assets/clock.png';


const TaskModal = (props) => (
    <Modal taskModal {...props}>
        <div className={style.modal}>
            <div className={style.modal_profile}>
                <div className={style.profile_block}>
                    <CircleImg img={props.photoURL} />
                    <div className={style.profile_info}>
                        <p className={style.profile_name}>{props.displayName}</p>
                        <p className={style.profile_number}>{props.phoneNumber}</p>
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
                    <h4 className={style.task_title}>{props.title}</h4>
                    <p className={style.task_description}>{props.description}</p>
                </div>
                <div>
                    <p className={style.task_cost}>{props.cost}₽</p>
                    <p className={style.task_time}>{props.time}.ч<img src={clock} alt="time" /></p>
                </div>
                <a className={style.task_start} href="">Начать <i className='fa fa-play'></i> </a>
            </div>
        </div>
    </Modal>
)

export default TaskModal;