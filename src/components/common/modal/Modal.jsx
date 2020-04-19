import React from 'react';
import style from './modal.module.scss';

import ReactModal from 'react-modal';



let Modal = (props) => {
    ReactModal.setAppElement('#root');


    return(
        <ReactModal
            className={props.taskModal ? style.content : style.createTaskModal}
            overlayClassName={{
                base: style.overlay,
                afterOpen: style.afterOpen,
                beforeClose: style.beforeClose
              }}
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
    
}

export default Modal;
