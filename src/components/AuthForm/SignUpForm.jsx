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
            <FormInput component={'input'} name='name' icon={'fa fa-user'} placeholder='Твой имя' />
            <FormInput component={'input'} name='email' icon={'fa fa-envelope'} placeholder='Твой почта' />
            <FormInput component={'input'} name='number' icon={'fa fa-phone'} placeholder='Номер телефона' />
            <FormInput component={'input'} name='password' icon={'fa fa-key'} placeholder='Пароль'/>
            <FormInput component={'input'} name= 'passwordConfirm'icon={'fa fa-key'} placeholder='Потверждения пароля'/>
            <BtnForm btnText='Зарегистривоться' />
        </form>
        </>
    )
}

export default reduxForm({
    form: 'SignUp'
})(SignUpForm);
