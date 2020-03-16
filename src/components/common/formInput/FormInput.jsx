import React from 'react';
import './formInput.modal.css';

const FormInput = (props) => (
    <div class="form-group">
        <label for="name"><i class={props.icon}></i></label>
        <input type="text"  placeholder={props.placeholder}/>
    </div>
)

export default FormInput;