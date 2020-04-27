import React from 'react';
import style from './form.module.scss'
import {reduxForm, Field} from "redux-form";


// Components 
import {FormsControl} from '../../../common/form-input/FormInput';
import BtnFormSign from '../../../common/btn-form-sign/btn-form-sign.component';

// Validators
import {requiredField} from '../../../../helpers/validators/validator';



let SignInForm = (props) => {

    return(
        <>
        <h2 className={style.auth_heading}>{props.textAuth}</h2>
        <form onSubmit={props.handleSubmit}>
            <Field element='input' autoComplete='off' validate={[requiredField]} component={FormsControl} name='email' icon={'fa fa-envelope'} placeholder='Твой почта' />
            <Field element='input' autoComplete='off' validate={[requiredField]} type={'password'} component={FormsControl} name='password' icon={'fa fa-key'} placeholder='Пароль'/>
            <BtnFormSign btnText='Войти' />
        </form>
        </>
    )
}

export default reduxForm({
    form: 'SignIn'
})( SignInForm);