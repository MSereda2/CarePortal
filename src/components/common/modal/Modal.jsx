import React from 'react';
import style from './modal.module.css';
import CircleImg from '../circleImg/CircleImg';

import ReactModal from 'react-modal';

import clock from '../../../assets/clock.png';



let Modal = (props) => (
    <ReactModal
    className={style.content}
    isOpen={props.isShowModal} 
    onRequestClose={() => { props.closeModal(props.id) }}>

        {props.children}
    </ReactModal>
)

export default Modal;