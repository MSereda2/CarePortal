import React from 'react';
import style from './form.module.scss'
import {reduxForm} from "redux-form";


// Components 
import FormInput from '../common/formInput/FormInput';
import BtnForm from '../common/btnForm/btnForm';


let SignUpForm = (props) => {

    return(
        <>
        <h2 className={style.auth_heading}>{props.textAuth}</h2>
        <form onSubmit={props.handleSubmit}>
            <FormInput type={'text'} component={'input'} name='name' icon={'fa fa-user'} placeholder='Твой имя' />
            <FormInput type={'text'} component={'input'} name='secondName' icon={'fa fa-user'} placeholder='Твой фамилия' />
            <FormInput type={'email'} component={'input'} name='email' icon={'fa fa-envelope'} placeholder='Твой почта' />
            <FormInput type={'text'} component={'input'} name='number' icon={'fa fa-phone'} placeholder='Номер телефона' />
            <FormInput type={'text'} component={'input'} name='password' icon={'fa fa-key'} placeholder='Пароль'/>
            <FormInput type={'password'} component={'input'} name= 'passwordConfirm'icon={'fa fa-key'} placeholder='Потверждения пароля'/>
            <BtnForm btnText='Зарегистривоться' />
        </form>
        </>
    )
}

export default reduxForm({
    form: 'SignUp'
})(SignUpForm);
