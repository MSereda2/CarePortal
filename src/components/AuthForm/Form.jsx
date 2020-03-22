import React from 'react';
import style from './form.module.css'
import {reduxForm} from "redux-form";


// Components 
import FormInput from '../common/formInput/FormInput';
import BtnForm from '../common/btnForm/btnForm';


let Form = (props) => {

    return(
        <form onSubmit={props.handleSubmit}>
            <h2 className={style.auth_heading}>{props.textAuth}</h2>
            {props.signUp
                ?
                    <>
                        <FormInput name='name' icon={'fa fa-user'} placeholder='Твой имя' />
                        <FormInput name='email' icon={'fa fa-envelope'} placeholder='Твой почта' />
                        <FormInput name='number' icon={'fa fa-phone'} placeholder='Номер телефона' />
                        <FormInput name='password' icon={'fa fa-key'} placeholder='Пароль'/>
                        <FormInput name= 'passwordConfirm'icon={'fa fa-key'} placeholder='Потверждения пароля'/>
                        <BtnForm btnText='Зарегистривоться' />
                    </>
                :   <>
                        <FormInput icon={'fa fa-user'} placeholder='твой имя' />
                        <FormInput icon={'fa fa-key'} placeholder='твой пароль'/>
                        <BtnForm btnText='Войти' />

                    </>
            }        
        </form>
    )
}

export default reduxForm({
    form: 'Auth'
})(Form);