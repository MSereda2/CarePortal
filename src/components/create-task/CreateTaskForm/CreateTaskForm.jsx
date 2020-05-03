// Packages
import React from 'react';
import style from './CreateTaskForm.module.scss';
import {compose} from 'redux';
import {reduxForm, Field, FieldArray } from 'redux-form';

// Components
import BtnMain from '../../common/btn-main/BtnMain';
import {FormsControl} from '../../common/form-input/FormInput';
import FormSlider from '../../common/form-slider/FormSlider';

// Validators
import {requiredField} from '../../../helpers/validators/validator';

// HOC
import {withSubmitForm} from '../../hoc/withSubmitForm';




const CreateTaskForm = (props) => {

    return(
        <form onSubmit={props.handleSubmit} className={style.formContainer}>
            <h3 className={style.form__heading}>
                Создать задание
            </h3>

            <Field validate={[requiredField]} element={'input'} icon={'fa fa-book'} type={'text'} component={FormsControl} name={'title'} placeholder={'Названия задания'} styleform={'true'} />

            <Field validate={[requiredField]} element={'textarea'} type={'text'} component={FormsControl} name={'description'} placeholder={'Описание задания'} styleform={'true'} />

            <Field  validate={[requiredField]} element={'autocomplete'} icon={'fa fa-map'} component={FormsControl} name={'coordinates'} styleform={'true'} />

            <Field validate={[requiredField]} element={'input'} icon={'fa fa-dollar'} type={'text'} component={FormsControl} name={'cost'} placeholder={'Цена задания'} styleform={'true'} />



            <Field icon={'fa fa-map'} name="time" component={FormSlider} styleform={'true'} />
            <BtnMain text="Создать пост" {...props} />
        </form>
    )
}

export default  compose(
    reduxForm({
        form: 'createTask',
        // initialValues: {
        //     time: '15'
        // }
    }),
    withSubmitForm
)(CreateTaskForm);