import React from 'react';
import './formInput.modal.css';

const FormInput = (props) => (
    <div class="form-group">
        <label for="name"><i class="fa fa-user"></i></label>
        <input type="text" name="name" id="name" placeholder="Your Name"/>
    </div>
)

export default FormInput;