// Packages
import React from 'react';
import { connect} from 'react-redux';
import {compose} from 'redux';
import {reduxForm} from 'redux-form';

// Style
import style from './CreateTask.module.css';

// Components
import BtnMain from '../common/btnMain/BtnMain';
import Modal from '../common/modal/Modal';
import FormInput from '../common/formInput/FormInput';

// Actions
import {createTaskShowModal, createTaskCloseModal} from '../../redux/reducers/tasks/task_actions';


let CreateTask = (props) => {

    return(
        <>
            <BtnMain {...props} />
            <Modal {...props}>
                <div className={style.createTaskModal}>
                    <div className={style.leftColumn}>
                        <form className={style.formContainer}>
                            <h3 className={style.form__heading}>
                                Создать задание
                            </h3>
                            <FormInput type={'text'} component={'input'} name={'taskTitle'} placeholder={'Названия задания'} style={'createTaskInput'} />
                            <FormInput type={'text'} component={'textarea'} name={'taskDescription'} placeholder={'Описание задания'} style={'createTaskInput'} />
                            <FormInput type={'text'} component={'input'} name={'taskAdress'} placeholder={'Адресс задания'} style={'createTaskInput'} />
                            <FormInput type={'text'} component={'input'} name={'taskTitle'} placeholder={'Цена задания'} style={'createTaskInput'} />
                            <BtnMain />
                        </form>
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
    reduxForm({
        form: 'createTask'
    })
)(CreateTask);