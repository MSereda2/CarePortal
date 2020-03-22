import React from 'react';
import './formInput.modal.css';
import {Field} from 'redux-form';

const FormInput = (props) => (
    <div className="form-group">
        <label ><i className={props.icon}></i></label>
        <Field component={"input"} name={props.name} type="text"  placeholder={props.placeholder}/>
    </div>
)

export default FormInput;