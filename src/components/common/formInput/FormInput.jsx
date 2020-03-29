import React from 'react';
import style from './formInput.module.scss';

import {Field} from 'redux-form';

const FormInput = (props) => {

    return(
        <div className={` ${props.style ? style.margin_bottom_small : null} ${style.form_group}`}>
        <label ><i className={props.icon}></i></label>
        <Field type={props.type} component={props.component} name={props.name} placeholder={props.placeholder}/>
        </div>
    )
    
}

export default FormInput;