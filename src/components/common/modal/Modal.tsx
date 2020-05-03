import React, {FC} from 'react';
import style from './modal.module.scss';

import ReactModal from 'react-modal';

type propTypes = {
    taskModal: any,
    isShowModal: boolean,
    closeModal: (id: number) => void,
    id: number,
    createTaskCloseModal: any,
    children: any
}

let Modal:FC<propTypes> = props => {
    ReactModal.setAppElement('#root');
    const {taskModal, isShowModal,closeModal,id,createTaskCloseModal,children} = props;

    return(
        <ReactModal
            className={taskModal ? style.content : style.createTaskModal}
            overlayClassName={{
                base: style.overlay,
                afterOpen: style.afterOpen,
                beforeClose: style.beforeClose
              }}
            isOpen={isShowModal} 
            onRequestClose={() => { 
                if(closeModal) {
                    closeModal(id)
                } else if(createTaskCloseModal) {
                    createTaskCloseModal()
                } else {
                    return null
                }
            }}>

            {children}
        </ReactModal>
    )
    
}

export default Modal;
