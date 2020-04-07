import React from 'react';
import style from './btnFormSign.module.scss';

const BtnFormSign = (props) => (
    <div className={style.btnFormContainer}>
        <button className={style.btnFormSign}>{props.btnText}</button>
    </div>
)

export default BtnFormSign;