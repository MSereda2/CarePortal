import React from 'react';
import style from './CreateTaskForm.module.scss';
import {compose} from 'redux';
import {reduxForm, Field} from 'redux-form';

// Components
import BtnMain from '../../common/btnMain/BtnMain';
import {FormsControl} from '../../common/formInput/FormInput';

// Validators
import {requiredField} from '../../../helpers/validators/validator'



const CreateTaskForm = (props) => {

    return(
        <form onSubmit={props.handleSubmit} className={style.formContainer}>
            <h3 className={style.form__heading}>
                Создать задание
            </h3>
            <Field validate={[requiredField]} element={'input'} icon={'fa fa-book'} type={'text'} component={FormsControl} name={'title'} placeholder={'Названия задания'} styleTask={'margin_bottom_small'} />
            <Field validate={[requiredField]} element={'textarea'} type={'text'} component={FormsControl} name={'description'} placeholder={'Описание задания'} styleTask={'margin_bottom_small'} />
            <Field validate={[requiredField]} element={'input'} icon={'fa fa-map'} type={'text'} component={FormsControl} name={'coordinates'} placeholder={'Адресс задания'} styleTask={'margin_bottom_small'} />
            <Field validate={[requiredField]} element={'input'} icon={'fa fa-dollar'} type={'text'} component={FormsControl} name={'cost'} placeholder={'Цена задания'} styleTask={'margin_bottom_small'} />
            <BtnMain />
        </form>
    )
}

export default  compose(
    reduxForm({
        form: 'createTask'
    })
)(CreateTaskForm);