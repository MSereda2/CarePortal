// Packages
import React from 'react';
import { connect} from 'react-redux';
import {compose} from 'redux';

// Style
import style from './CreateTask.module.css';

// Components
import BtnMain from '../common/btnMain/BtnMain';
import Modal from '../common/modal/Modal';
import CreateTaskForm from './CreateTaskForm/CreateTaskForm';
// Actions
import {createTaskShowModal, createTaskCloseModal} from '../../redux/reducers/tasks/task_actions';


let CreateTask = (props) => {

    return(
        <>
            <BtnMain {...props} />
            <Modal {...props}>
                <div className={style.createTaskModal}>
                    <div className={style.leftColumn}>
                        <CreateTaskForm />   
                    </div>
                    <div className={style.rightColumn}>
                        
                    </div>
                </div>
            </Modal>
        </>
    )
}

const MapStateToProps = (state) => ({
    isShowModal: state.task.isShowModal
})

export default compose(
    connect(MapStateToProps, {createTaskShowModal, createTaskCloseModal}),
)(CreateTask);