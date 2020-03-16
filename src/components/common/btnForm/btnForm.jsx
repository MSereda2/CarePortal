import React from 'react';
import style from './btnForm.module.css';

const BtnForm = (props) => (
    <div className={style.btnFormContainer}>
        <button className={style.btnForm}>Войти</button>
    </div>
)

export default BtnForm;