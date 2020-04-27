import React from 'react';
import style from './btn-form-sign.module.scss';

const BtnFormSign = (props) => (
    <div className={style.btnFormContainer}>
        <button className={style.btnForm}>{props.btnText}</button>
    </div>
)

export default BtnFormSign;