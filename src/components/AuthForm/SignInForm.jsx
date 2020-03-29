import React from 'react';
import style from './form.module.scss'
import {reduxForm} from "redux-form";


// Components 
import FormInput from '../common/formInput/FormInput';
import BtnForm from '../common/btnForm/btnForm';


let SignInForm = (props) => {

    return(
        <>
        <h2 className={style.auth_heading}>{props.textAuth}</h2>
        <form onSubmit={props.handleSubmit}>
            <FormInput component={'input'} name='email' icon={'fa fa-envelope'} placeholder='Твой почта' />
            <FormInput type={'password'} component={'input'} name='password' icon={'fa fa-key'} placeholder='Пароль'/>
            <BtnForm btnText='Войти' />
        </form>
        </>
    )
}

export default reduxForm({
    form: 'SignIn'
})( SignInForm);