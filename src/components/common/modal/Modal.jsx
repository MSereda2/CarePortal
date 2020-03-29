import React from 'react';
import style from './modal.module.css';
import CircleImg from '../circleImg/CircleImg';

import ReactModal from 'react-modal';

import clock from '../../../assets/clock.png';



let Modal = (props) => (
    <ReactModal
        className={props.taskModal ? style.content : style.createTaskModal}
        isOpen={props.isShowModal} 
        onRequestClose={() => { 
            if(props.closeModal) {
                props.closeModal(props.id)
            } else if(props.createTaskCloseModal) {
                props.createTaskCloseModal()
            } else {
                return null
            }
         }}>

            {props.children}
    </ReactModal>
)

export default Modal;
