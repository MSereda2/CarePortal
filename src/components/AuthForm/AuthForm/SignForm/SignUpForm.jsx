// Packages
import React from 'react';
import style from './form.module.scss'
import {reduxForm, Field} from "redux-form";

// Components 
import {FormsControl} from '../../../common/formInput/FormInput';
import BtnFormSign from '../../../common/BtnFormSign/BtnFormSign';

// Input Validators
import {requiredField, setMaxLength, firstCapitalLatter} from '../../../../helpers/validators/validator';


let SignUpForm = (props) => {

    const maxLength15 = setMaxLength(15);

    return(
        <>
        <h2 className={style.auth_heading}>{props.textAuth}</h2>
        <form onSubmit={props.handleSubmit}>
            <Field element={'input'} validate={[requiredField,firstCapitalLatter, maxLength15]} autoComplete="off" type='text' component={FormsControl} name='name' placeholder='Имя твоё' icon={'fa fa-user'} />

            <Field element={'input'} validate={[requiredField]} type='text' component={FormsControl} name='secondName' icon='fa fa-user' placeholder='Твой фамилия' />

            <Field element={'input'} validate={[requiredField]} type={'email'} component={FormsControl} name='email' icon={'fa fa-envelope'} placeholder='Твой почта' />

            <Field element={'input'} validate={[requiredField]} type={'text'} component={FormsControl} name='phoneNumber' icon={'fa fa-phone'} placeholder='Номер телефона' />

            <Field element={'input'} validate={[requiredField]} type={'text'} component={FormsControl} name='password' icon={'fa fa-key'} placeholder='Пароль'/>
            
            <Field element={'input'} validate={[requiredField]} type={'password'} component={FormsControl} name= 'passwordConfirm'icon={'fa fa-key'} placeholder='Потверждения пароля'/>
            
            <BtnFormSign btnText='Зарегистривоться' />
        </form>
        </>
    )
}

export default reduxForm({
    form: 'SignUp'
})(SignUpForm);
