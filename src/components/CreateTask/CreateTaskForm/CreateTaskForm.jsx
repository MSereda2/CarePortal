import React from 'react';
import style from './CreateTaskForm.module.scss';
import {compose} from 'redux';
import {reduxForm} from 'redux-form';

// Components
import BtnMain from '../../common/btnMain/BtnMain';
import FormInput from '../../common/formInput/FormInput';



const CreateTaskForm = (props) => {

    return(
        <form onSubmit={props.handleSubmit} className={style.formContainer}>
            <h3 className={style.form__heading}>
                Создать задание
            </h3>
            <FormInput icon={'fa fa-book'} type={'text'} component={'input'} name={'title'} placeholder={'Названия задания'} styleTask={'margin_bottom_small'} />
            <FormInput type={'text'} component={'textarea'} name={'description'} placeholder={'Описание задания'} styleTask={'margin_bottom_small'} />
            <FormInput icon={'fa fa-map'} type={'text'} component={'input'} name={'coordinates'} placeholder={'Адресс задания'} styleTask={'margin_bottom_small'} />
            <FormInput icon={'fa fa-dollar'} type={'text'} component={'input'} name={'cost'} placeholder={'Цена задания'} styleTask={'margin_bottom_small'} />
            <BtnMain />
        </form>
    )
}

export default  compose(
    reduxForm({
        form: 'createTask'
    })
)(CreateTaskForm);