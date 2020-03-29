import React from 'react';
import './formInput.modal.css';
import {Field} from 'redux-form';

const FormInput = (props) => (
    <div className={` ${props.style} form-group`}>
        <label ><i className={props.icon}></i></label>
        <Field type={props.type} component={props.component} name={props.name} placeholder={props.placeholder}/>
    </div>
)

export default FormInput;