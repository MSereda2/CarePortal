import React from 'react';
import './formCheckBox.module.css';

const FormCheckBox = (props) => (
    <div class="form-group">
        <input type="checkbox" name="remember-me" id="remember-me" class="agree-term" />
        <label for="remember-me" class="label-agree-term"><span><span></span></span>Remember me</label>
    </div>
)

export default FormCheckBox;