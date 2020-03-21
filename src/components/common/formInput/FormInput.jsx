import React from 'react';
import './formInput.modal.css';

const FormInput = (props) => (
    <div className="form-group">
        <label ><i className={props.icon}></i></label>
        <input type="text"  placeholder={props.placeholder}/>
    </div>
)

export default FormInput;