import React from 'react';
import style from './CreateTaskForm.module.scss';
import {compose} from 'redux';
import {reduxForm} from 'redux-form';

// Components
import BtnMain from '../../common/btnMain/BtnMain';
import FormInput from '../../common/formInput/FormInput';



const CreateTaskForm = () => {

    return(
        <form className={style.formContainer}>
            <h3 className={style.form__heading}>
                Создать задание
            </h3>
            <FormInput icon={'fa fa-book'} type={'text'} component={'input'} name={'taskTitle'} placeholder={'Названия задания'} style={'margin_bottom_small'} />
            <FormInput type={'text'} component={'textarea'} name={'taskDescription'} placeholder={'Описание задания'} style={'margin_bottom_small'} />
            <FormInput icon={'fa fa-map'} type={'text'} component={'input'} name={'taskAdress'} placeholder={'Адресс задания'} style={'margin_bottom_small'} />
            <FormInput icon={'fa fa-dollar'} type={'text'} component={'input'} name={'taskCost'} placeholder={'Цена задания'} style={'margin_bottom_small'} />
            <BtnMain />
        </form>
    )
}

export default  compose(
    reduxForm({
        form: 'createTask'
    })
)(CreateTaskForm);