import React from 'react';
import style from './form.module.scss'
import {reduxForm, Field} from "redux-form";


// Components 
import {FormsControl} from '../common/formInput/FormInput';
import BtnForm from '../common/btnForm/btnForm';

// Validators
import {requiredField} from '../../helpers/validators/validator';



let SignInForm = (props) => {

    return(
        <>
        <h2 className={style.auth_heading}>{props.textAuth}</h2>
        <form onSubmit={props.handleSubmit}>
            <Field element='input' autoComplete='off' validate={[requiredField]} component={FormsControl} name='email' icon={'fa fa-envelope'} placeholder='Твой почта' />
            <Field element='input' autoComplete='off' validate={[requiredField]} type={'password'} component={FormsControl} name='password' icon={'fa fa-key'} placeholder='Пароль'/>
            <BtnForm btnText='Войти' />
        </form>
        </>
    )
}

export default reduxForm({
    form: 'SignIn'
})( SignInForm);