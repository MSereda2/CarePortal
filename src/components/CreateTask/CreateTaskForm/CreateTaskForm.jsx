// Packages
import React from 'react';
import style from './CreateTaskForm.module.scss';
import {compose} from 'redux';
import {reduxForm, Field} from 'redux-form';

// Components
import BtnMain from '../../common/btnMain/BtnMain';
import {FormsControl} from '../../common/formInput/FormInput';
import FormSlider from '../../common/formSlider/FormSlider';

// Validators
import {requiredField} from '../../../helpers/validators/validator';

// HOC
import {withSubmitForm} from '../../HOC/withSubmitForm';




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

            <Field min="-10" max="10"  icon={'fa fa-map'} name="time" component={FormSlider} type='range' styleform={'true'} />
            <BtnMain {...props} />
        </form>
    )
}

export default  compose(
    reduxForm({
        form: 'createTask',
    }),
    withSubmitForm
)(CreateTaskForm);