import React from 'react';
import style from './btnForm.module.css';

const BtnForm = (props) => (
    <div className={style.btnFormContainer}>
        <button className={style.btnForm}>{props.btnText}</button>
    </div>
)

export default BtnForm;